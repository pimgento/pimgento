/**
 * @author                 Agence Dn'D <contact@dnd.fr>
 * @copyright              Copyright (c) 2017 Agence Dn'D
 * @link                   http://www.dnd.fr/
 */

$(document).ready(function(){
    toggleMenu('.btn-navigation', '.navigation');
    toggleMenu('.toggle-sidebar', '.sidebar-wrapper');
    selectImport('#import-type');
    selectImport('#file-to-import');
    launchTerminal('#pimgento-import', '#launch-import','#import-type','#file-to-import');
    launchLazyload('img');
});

function toggleMenu(button, menu) {
    $(button).click(function(){
        $(menu).toggleClass('isopen');
        $(button).toggleClass('rotate');

        if (menu === '.navigation') {
            $('body').toggleClass('nav-open');
        }
    });
}

function selectImport(container) {
    var selectContainer = $(container);
    var selectItems = selectContainer.find('.type');

    selectItems.click(function() {
        if (!$(this).hasClass('active')) {
            selectItems.each(function() {
               $(this).removeClass('active');
            });

            $(this).addClass('active');
        }
    });
}

function launchTerminal(id, button, importContainer, fileContainer) {
    if (button && importContainer && fileContainer) {
            $(button).click(function(e) {
                e.preventDefault();

                var importSelected = $(importContainer).find('.type.active');
                var fileSelected = $(fileContainer).find('.type.active');

                var importSelectedDataId = importSelected.attr('data-id');
                var fileSelectedDataId = fileSelected.attr('data-id');
                var fileSelectedTitle = fileSelected.attr('data-title');

                var dt = new Date();
                var time = addZero(dt.getHours()) + ":" + addZero(dt.getMinutes()) + ":" + addZero(dt.getSeconds());

                if (importSelectedDataId === fileSelectedDataId) {
                    $(id).html("<span data-ty='progress' data-ty data-ty-prompt='>' data-ty-progressChar='.'></span><span data-ty data-ty data-ty-prompt='>'>["+ time +"] You successfully import "+ fileSelectedTitle + "</span>");
                }

                else {
                    $(id).html("<span data-ty data-ty data-ty-prompt='>'>["+ time +"] Error ! Please selected the right file.</span>");
                }

                new Termynal(id);
            });

    } else {
        new Termynal(id);
    }
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function launchLazyload(target) {
    $(target).lazyload();
}