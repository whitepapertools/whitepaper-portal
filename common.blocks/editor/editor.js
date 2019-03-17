class Editor {
    constructor() {
        this.TEXT_SIZES = [
            { name: 's', size: 8 },
            { name: 'm', size: 10 },
            { name: 'l', size: 13 },
            { name: 'xl', size: 15 },
            { name: 'xxl', size: 24 },
            { name: 'xxxl', size: 32 },
            { name: 'xxxxl', size: 38}
        ];

        this.EDITOR_INTERFACE = document.querySelector('.editor__interface');
        this.EDITOR_GLOBAL_SETTINGS = document.querySelector('.editor__global-settings');
        this.EDITOR_TEXT_SETTINGS = document.querySelector('.editor__text-settings');
        this.EDITOR_GRID_SETTINGS = document.querySelector('.editor__grid-settings');
        this.EDITOR_SPACE_SETTINGS = document.querySelector('.editor__space-settings');

        this.LAYOUT = this.EDITOR_INTERFACE.querySelector('.tpl-layout');

        this.editableText = this.EDITOR_INTERFACE.querySelectorAll('.editor__editable-text');
        this.selectedTextBlock;

        this.CHOOSEN_TEXT_BLOCK_CLASS = 'editor__editable-text_active';



        this.bind();
    }

    showSelection() {
        let choosenTextBlock = this.EDITOR_INTERFACE.querySelectorAll('.' + this.CHOOSEN_TEXT_BLOCK_CLASS);
        let name = this.selectedTextBlock.getAttribute('data-name');

        if(choosenTextBlock)
            choosenTextBlock.forEach(item => item.classList.remove(this.CHOOSEN_TEXT_BLOCK_CLASS) );

        this.selectedTextBlock = this.EDITOR_INTERFACE.querySelectorAll(`.editor__editable-text[data-name=${name}]`);
        this.selectedTextBlock.forEach(item => {
            item.classList.add(this.CHOOSEN_TEXT_BLOCK_CLASS);
        });
    }

    changeControlInPalette(type, className, parent) {
        let oldOne = parent.querySelector(`.control_type_${type}.control_active`);
        let newOne = parent.querySelector(`.control_type_${type}[${type}=${className}]`);

        if (oldOne) oldOne.classList.remove('control_active');
        if (newOne) newOne.classList.add('control_active');
    }

    changeTextSizeInPalette(name, number) {
        let textSizeName = this.EDITOR_TEXT_SETTINGS.querySelector('.text-size__name');
        let textSizeNumber = this.EDITOR_TEXT_SETTINGS.querySelector('.text-size__number');

        textSizeNumber.innerHTML = number;
        textSizeName.innerHTML = name;
    }

    showTextSettings(textBlock) {
        this.selectedTextBlock = textBlock;
        this.showSelection();

        let classList = Array.from(textBlock.classList);

        let sizeName = classList.filter(i => i.includes('text_size_'))[0];
            sizeName = sizeName.split('_')[2];
        let sizeNumber = this.TEXT_SIZES.find(i => i.name === sizeName);
        this.changeTextSizeInPalette(sizeName, sizeNumber.size);

        let colorClass = classList.filter(i => i.includes('text_view_'))[0];
        this.changeControlInPalette('color', colorClass, this.EDITOR_TEXT_SETTINGS);

        let alignClass = classList.filter(i => i.includes('text_align_'))[0];
        this.changeControlInPalette('align', alignClass, this.EDITOR_TEXT_SETTINGS);

        let weightClass = classList.filter(i => i.includes('text_weight_'))[0];
        this.changeControlInPalette('weight', weightClass, this.EDITOR_TEXT_SETTINGS);
    }

    changeLayoutSettings(button) {
        let leftGridColumn = this.EDITOR_GRID_SETTINGS.querySelectorAll('.text')[0];
        let rightGridColumn = this.EDITOR_GRID_SETTINGS.querySelectorAll('.text')[2];

        if(button == 'plus') {
            if (leftGridColumn.innerHTML > 1 && leftGridColumn.innerHTML < 4) {
                this.LAYOUT.classList.remove(`tpl-layout_structure_${leftGridColumn.innerHTML}0-${rightGridColumn.innerHTML}0`);

                leftGridColumn.innerHTML -= -1;
                rightGridColumn.innerHTML -= 1;

                this.LAYOUT.classList.add(`tpl-layout_structure_${leftGridColumn.innerHTML}0-${rightGridColumn.innerHTML}0`);
            }
        } else {
            if (leftGridColumn.innerHTML > 2 && leftGridColumn.innerHTML < 5) {
                this.LAYOUT.classList.remove(`tpl-layout_structure_${leftGridColumn.innerHTML}0-${rightGridColumn.innerHTML}0`);

                leftGridColumn.innerHTML -= 1;
                rightGridColumn.innerHTML -= -1;

                this.LAYOUT.classList.add(`tpl-layout_structure_${leftGridColumn.innerHTML}0-${rightGridColumn.innerHTML}0`);
            }
        }
    }

    changeSpaceSettings(button) {
        let spaceModule = this.EDITOR_SPACE_SETTINGS.querySelector('.text');

        if(button == 'plus') {
            if (spaceModule.innerHTML > 2 && spaceModule.innerHTML < 6) {
                spaceModule.innerHTML -= -1;

                this.EDITOR_INTERFACE.setAttribute('style', `--space-module: ${spaceModule.innerHTML}px;`);
            }
        } else {
            if (spaceModule.innerHTML > 3 && spaceModule.innerHTML < 7) {
                spaceModule.innerHTML -= 1;

                this.EDITOR_INTERFACE.setAttribute('style', `--space-module: ${spaceModule.innerHTML}px;`);
            }
        }
    }

    changeTextSize(button) {
        let classList = Array.from(this.selectedTextBlock[0].classList);

        let sizeNameClass = classList.filter(i => i.includes('text_size_'))[0];
        let sizeName = classList.filter(i => i.includes('text_size_'))[0];
            sizeName = sizeName.split('_')[2];

        let thisSizeIndex = this.TEXT_SIZES.findIndex(i => i.name === sizeName);
        let nextSize = false;

        if(button == 'plus' && this.TEXT_SIZES.length > thisSizeIndex) {
            nextSize = this.TEXT_SIZES[thisSizeIndex + 1];
        }
        else if(button == 'minus' && thisSizeIndex > 0) {
            nextSize = this.TEXT_SIZES[thisSizeIndex - 1];
        }

        if(nextSize) {
            this.changeTextSizeInPalette(nextSize.name, nextSize.size);

            this.selectedTextBlock.forEach(i => {
                i.classList.remove(sizeNameClass);
                i.classList.add('text_size_' + nextSize.name);
            });
        }
    }

    changeTextProp(button, type) {
        let classList = Array.from(this.selectedTextBlock[0].classList);

        let oldClassName = classList.filter(i => i.includes(`text_${type}_`))[0];
        let newClassName = button.getAttribute(type);

        this.changeControlInPalette(type, newClassName, this.EDITOR_TEXT_SETTINGS);

        this.selectedTextBlock.forEach(i => {
            i.classList.remove(oldClassName);
            i.classList.add(newClassName);
        });
    }

    changePalette(btn) {
        let classList = Array.from(btn.classList);
        let theme = classList.filter(i => i.includes(`theme_color_`))[0];

        let oldTheme = Array.from(this.EDITOR_INTERFACE.classList).filter(i => i.includes(`theme_color_`))[0];

        let viewControls = this.EDITOR_TEXT_SETTINGS.querySelectorAll('.control_type_view');

        viewControls.forEach(item => {
            item.classList.remove(oldTheme);
            item.classList.add(theme);
        })

        this.EDITOR_INTERFACE.classList.remove(oldTheme);
        this.EDITOR_INTERFACE.classList.add(theme);

        this.changeControlInPalette('palette', btn.getAttribute('palette'), this.EDITOR_GLOBAL_SETTINGS);
    }

    changeTextStyle(btn) {
        let classList = Array.from(btn.classList);
        let theme = classList.filter(i => i.includes(`theme_font_`))[0];

        let oldTheme = Array.from(this.EDITOR_INTERFACE.classList).filter(i => i.includes(`theme_font_`))[0];

        let viewControls = this.EDITOR_TEXT_SETTINGS.querySelectorAll('.control_type_weight');

        viewControls.forEach(item => {
            item.classList.remove(oldTheme);
            item.classList.add(theme);
        })

        this.EDITOR_INTERFACE.classList.remove(oldTheme);
        this.EDITOR_INTERFACE.classList.add(theme);

        this.changeControlInPalette('text-style', btn.getAttribute('text-style'), this.EDITOR_GLOBAL_SETTINGS);
    }

    bind() {
        // отображение настроек выбранного текстового блока
        this.editableText.forEach(textBlock => {
            textBlock.addEventListener('click', () => {
                this.showTextSettings(textBlock);
            });
        });

        // выбрать заголовок
        let title = this.EDITOR_INTERFACE.querySelector('.text[data-name=main-title]');
        title.click();

        // изменение размера текста при клике на [+] [-]
        let textSizePlus = this.EDITOR_TEXT_SETTINGS.querySelector('.text-size__plus');
        let textSizeMinus = this.EDITOR_TEXT_SETTINGS.querySelector('.text-size__minus');

        textSizePlus.addEventListener('click', () => { this.changeTextSize('plus'); });
        textSizeMinus.addEventListener('click', () => { this.changeTextSize('minus'); });

        // изменение жирности текста при клике на иконки
        let textWeightBtns = this.EDITOR_TEXT_SETTINGS.querySelectorAll('.control_type_weight');

        textWeightBtns.forEach(item => {
            item.addEventListener('click', () => { this.changeTextProp(item, 'weight'); });
        });

        // изменение выключки текста при клике на иконки
        let textAlignBtns = this.EDITOR_TEXT_SETTINGS.querySelectorAll('.control_type_align');

        textAlignBtns.forEach(item => {
            item.addEventListener('click', () => { this.changeTextProp(item, 'align'); });
        });

        // изменение цвета текста при клике на иконки
        let textColorBtns = this.EDITOR_TEXT_SETTINGS.querySelectorAll('.control_type_view');

        textColorBtns.forEach(item => {
            item.addEventListener('click', () => { this.changeTextProp(item, 'view'); });
        });

        // изменение сетки при клике на [+] [-]
        let btnMinusGridRatio = this.EDITOR_GRID_SETTINGS.querySelector('.btn-minus');
        let btnPlusGridRatio = this.EDITOR_GRID_SETTINGS.querySelector('.btn-plus');

        btnPlusGridRatio.addEventListener('click', () => { this.changeLayoutSettings('plus'); });
        btnMinusGridRatio.addEventListener('click', () => { this.changeLayoutSettings('minus'); });

        // изменение модуля отступа при клике на [+] [-]
        let btnMinusGridSpace = this.EDITOR_SPACE_SETTINGS.querySelector('.btn-minus');
        let btnPlusGridSpace = this.EDITOR_SPACE_SETTINGS.querySelector('.btn-plus');

        btnPlusGridSpace.addEventListener('click', () => { this.changeSpaceSettings('plus'); });
        btnMinusGridSpace.addEventListener('click', () => { this.changeSpaceSettings('minus'); });

        // изменение палитры по клику на иконки
        let paletteBtns = this.EDITOR_GLOBAL_SETTINGS.querySelectorAll('.control_type_palette');

        paletteBtns.forEach(item => {
            item.addEventListener('click', () => { this.changePalette(item); });
        });

        // изменение стиля текста по клику на иконки
        let textStyleBtns = this.EDITOR_GLOBAL_SETTINGS.querySelectorAll('.control_type_text-style');

        textStyleBtns.forEach(item => {
            item.addEventListener('click', () => { this.changeTextStyle(item); });
        });
    }
}

new Editor();
