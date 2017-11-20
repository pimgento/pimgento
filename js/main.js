/**
 * @author                 Agence Dn'D <contact@dnd.fr>
 * @copyright              Copyright (c) 2017 Agence Dn'D
 * @license                http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @link                   http://www.dnd.fr/
 */

$(document).ready(function(){
    toggleMenu('.btn-navigation', '.navigation');
    toggleMenu('.toggle-sidebar', '.sidebar-wrapper');
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