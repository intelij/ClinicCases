//
// Scripts for contacts panel on cases tab
//

$('.case_detail_nav #item6').live('click', function() {

	var thisPanel = $(this).closest('.case_detail_nav').siblings('.case_detail_panel');
    var caseId = $(this).closest('.case_detail_nav').siblings('.case_detail_panel').data('CaseNumber');

    //Get heights
    var toolsHeight = $(this).outerHeight();
    var thisPanelHeight = $(this).closest('.case_detail_nav').height();
    var documentsWindowHeight = thisPanelHeight - toolsHeight;

    thisPanel.load('lib/php/data/cases_contacts_load.php', {'case_id': caseId}, function() {

        //Set css
        $('div.case_detail_panel_tools').css({'height': toolsHeight});
        $('div.case_detail_panel_casenotes').css({'height': caseNotesWindowHeight});
        $('div.case_detail_panel_tools_left').css({'width': '30%'});
        $('div.case_detail_panel_tools_right').css({'width': '70%'});

        //Set buttons
        $('button.new_contact').button({icons: {primary: "fff-icon-vcard-add"},text: true});

        //Round Corners
        $('div.csenote').addClass('ui-corner-all');

        //Apply shadow on scroll
        $(this).children('.case_detail_panel_casenotes').bind('scroll', function() {
            var scrollAmount = $(this).scrollTop();
            if (scrollAmount === 0 && $(this).hasClass('csenote_shadow'))
            {
                $(this).removeClass('csenote_shadow');
            }
            else
            {
                $(this).addClass('csenote_shadow');
            }
        });

    });

});