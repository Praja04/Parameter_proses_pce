<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */

$routes->group("mode/line6", function ($routes) {
    $routes->get('hsm1', 'Mode::hsm1_line6');
    $routes->get('hsm2', 'Mode::hsm2_line6');
    $routes->get('alt1', 'Mode::alt1_line6');
    $routes->get('alt2', 'Mode::alt2_line6');
    $routes->get('apb1', 'Mode::apb1_line6');
    $routes->get('apb2', 'Mode::apb2_line6');
});
$routes->group("mode/line5", function ($routes) {
    $routes->get('hsm1', 'Mode::hsm1_line5');
    $routes->get('hsm2', 'Mode::hsm2_line5');
    $routes->get('alt1', 'Mode::alt1_line5');
    $routes->get('alt2', 'Mode::alt2_line5');
    $routes->get('apb1', 'Mode::apb1_line5');
    $routes->get('apb2', 'Mode::apb2_line5');
});
$routes->get('/', 'Mode::menu');

//line6
$routes->group("apbline6",  function ($routes) {
    //APB1
    $routes->get('dashboard/1', 'DashboardApbLine6::dashboard_apb1');
    $routes->get('get/temp/left1', 'DashboardApbLine6::getData_APB1_tempLeftActual');
    $routes->get('get/temp/right1', 'DashboardApbLine6::getData_APB1_tempRightActual');
    $routes->get('distinct/left1', 'DashboardApbLine6::getDistinct_APB1_tempLeftActual');
    $routes->get('distinct/right1', 'DashboardApbLine6::getDistinct_APB1_tempRightActual');
    $routes->get('get/temp/left1/date/(:any)', 'DashboardApbLine6::getDataByDate_APB1_tempLeft/$1');
    $routes->get('get/temp/right1/date/(:any)', 'DashboardApbLine6::getDataByDate_APB1_tempRight/$1');
    //get layout mode
    $routes->get('get/parameter/1', 'DashboardApbLine6::getDataParameterAPB1');
    $routes->get('get/total/data/1', 'DashboardApbLine6::getDataTodayAPB1');
    //bydate
    $routes->get('distinct/left1/date/(:any)', 'DashboardApbLine6::getDistinct_APB1_tempLeftActualbyDate/$1');
    $routes->get('distinct/right1/date/(:any)', 'DashboardApbLine6::getDistinct_APB1_tempRightActualbyDate/$1');
    //APB2
    $routes->get('dashboard/2', 'DashboardApbLine6::dashboard_apb2');
    $routes->get('get/temp/left2', 'DashboardApbLine6::getData_APB2_tempLeftActual');
    $routes->get('get/temp/right2', 'DashboardApbLine6::getData_APB2_tempRightActual');
    $routes->get('distinct/left2', 'DashboardApbLine6::getDistinct_APB2_tempLeftActual');
    $routes->get('distinct/right2', 'DashboardApbLine6::getDistinct_APB2_tempRightActual');
    $routes->get('get/temp/left2/date/(:any)', 'DashboardApbLine6::getDataByDate_APB2_tempLeft/$1');
    $routes->get('get/temp/right2/date/(:any)', 'DashboardApbLine6::getDataByDate_APB2_tempRight/$1');
    //layout mode data
    $routes->get('get/parameter/2', 'DashboardApbLine6::getDataParameterAPB2');
    $routes->get('get/total/data/2', 'DashboardApbLine6::getDataTodayAPB2');
    //bydate
    $routes->get('distinct/left2/date/(:any)', 'DashboardApbLine6::getDistinct_APB2_tempLeftActualbyDate/$1');
    $routes->get('distinct/right2/date/(:any)', 'DashboardApbLine6::getDistinct_APB2_tempRightActualbyDate/$1');
});

$routes->group("hsmline6",  function ($routes) {
    //HSM1
    $routes->get('dashboard/1', 'DashboardHsmLine6::dashboard_hsm1');
    $routes->get('get/temp/left1', 'DashboardHsmLine6::getData_HSM1_tempLeft');
    $routes->get('get/temp/right1', 'DashboardHsmLine6::getData_HSM1_tempRight');
    $routes->get('distinct/left1', 'DashboardHsmLine6::getDistinct_HSM1_tempLeft');
    $routes->get('distinct/left1/date/(:any)', 'DashboardHsmLine6::getDistinct_HSM1_tempLeftbyDate/$1');
    $routes->get('distinct/right1/date/(:any)', 'DashboardHsmLine6::getDistinct_HSM1_tempRightbyDate/$1');
    $routes->get('distinct/right1', 'DashboardHsmLine6::getDistinct_HSM1_tempRight');
    $routes->get('get/temp/left1/date/(:any)', 'DashboardHsmLine6::getDataByDate_HSM1_tempLeft/$1');
    $routes->get('get/temp/right1/date/(:any)', 'DashboardHsmLine6::getDataByDate_HSM1_tempRight/$1');
    $routes->get('get/type/battery1/first', 'DashboardHsmLine6::getDataTypeBatteryFirstHSM1');
    $routes->get('get/total/data1', 'DashboardHsmLine6::getTotalDataHSM1');
    $routes->get('get/type/battery', 'DashboardHsmLine6::getDataTypeBattery');
    $routes->get('get/type/1', 'DashboardHsmLine6::getlastDandoriTypeHSM1');
    $routes->get('get/data/ok/1', 'DashboardHsmLine6::getTotalDataOKHSM1');
    $routes->get('get/data/parameter/1', 'DashboardHsmLine6::getParameterData1');
    //data melting
    $routes->get('get/data/lid_holder_melting/1', 'DashboardHsmLine6::getData_HSM1_LidHolderMelting');
    $routes->get('get/data/box_lifter_melting/1', 'DashboardHsmLine6::getData_HSM1_BoxLifterMelting');
    $routes->get('get/data/mirror_pos/1', 'DashboardHsmLine6::getData_HSM1_MirrorPos');
    //data melting by date
    $routes->get('get/data/lid_holder_melting1/date/(:any)', 'DashboardHsmLine6::getData_HSM1_LidHolderMeltingByDate/$1');
    $routes->get('get/data/box_lifter_melting1/date/(:any)', 'DashboardHsmLine6::getData_HSM1_BoxLifterMeltingByDate/$1');
    $routes->get('get/data/mirror_pos1/date/(:any)', 'DashboardHsmLine6::getData_HSM1_MirrorPosByDate/$1');

    //HSM2
    $routes->get('dashboard/2', 'DashboardHsmLine6::dashboard_hsm2');
    $routes->get('get/temp/left2', 'DashboardHsmLine6::getData_HSM2_tempLeft');
    $routes->get('get/temp/right2', 'DashboardHsmLine6::getData_HSM2_tempRight');
    $routes->get('distinct/left2', 'DashboardHsmLine6::getDistinct_HSM2_tempLeft');
    $routes->get('distinct/right2', 'DashboardHsmLine6::getDistinct_HSM2_tempRight');
    $routes->get('distinct/left2/date/(:any)', 'DashboardHsmLine6::getDistinct_HSM2_tempLeftbyDate/$1');
    $routes->get('distinct/right2/date/(:any)', 'DashboardHsmLine6::getDistinct_HSM2_tempRightbyDate/$1');
    $routes->get('get/temp/left2/date/(:any)', 'DashboardHsmLine6::getDataByDate_HSM2_tempLeft/$1');
    $routes->get('get/temp/right2/date/(:any)', 'DashboardHsmLine6::getDataByDate_HSM2_tempRight/$1');
    $routes->get('get/total/data2', 'DashboardHsmLine6::getTotalDataHSM2');

    $routes->get('get/type/battery/2', 'DashboardHsmLine6::getDataTypeBattery');
    $routes->get('get/type/2', 'DashboardHsmLine6::getlastDandoriTypeHSM2');
    $routes->get('get/data/ok/2', 'DashboardHsmLine6::getTotalDataOKHSM2');
    $routes->get('get/data/parameter/2', 'DashboardHsmLine6::getParameterData2');
    //data melting
    $routes->get('get/data/lid_holder_melting/2', 'DashboardHsmLine6::getData_HSM2_LidHolderMelting');
    $routes->get('get/data/box_lifter_melting/2', 'DashboardHsmLine6::getData_HSM2_BoxLifterMelting');
    $routes->get('get/data/mirror_pos/2', 'DashboardHsmLine6::getData_HSM2_MirrorPos');
    //data melting by date
    $routes->get('get/data/lid_holder_melting2/date/(:any)', 'DashboardHsmLine6::getData_HSM2_LidHolderMeltingByDate/$1');
    $routes->get('get/data/box_lifter_melting2/date/(:any)', 'DashboardHsmLine6::getData_HSM2_BoxLifterMeltingByDate/$1');
    $routes->get('get/data/mirror_pos2/date/(:any)', 'DashboardHsmLine6::getData_HSM2_MirrorPosByDate/$1');
});

$routes->group("altline6", function ($routes) {
    //ALT1
    $routes->get('dashboard/1', 'DashboardAltLine6::dashboard_alt1');
    $routes->get('get/all/cell1', 'DashboardAltLine6::getData_ALT1_cell1');
    $routes->get('get/all/cell3', 'DashboardAltLine6::getData_ALT1_cell3');
    $routes->get('get/all/cell5', 'DashboardAltLine6::getData_ALT1_cell5');
    $routes->get('get/distinct/cell1', 'DashboardAltLine6::getDistinct_ALT1_cell1');
    $routes->get('get/distinct/cell3', 'DashboardAltLine6::getDistinct_ALT1_cell3');
    $routes->get('get/distinct/cell5', 'DashboardAltLine6::getDistinct_ALT1_cell5');
    //filter data alt 1
    $routes->get('get/cell1/date/(:any)', 'DashboardAltLine6::getDataActualCell1ByDate/$1');
    $routes->get('get/cell3/date/(:any)', 'DashboardAltLine6::getDataActualCell3ByDate/$1');
    $routes->get('get/cell5/date/(:any)', 'DashboardAltLine6::getDataActualCell5ByDate/$1');
    //layout mode data
    $routes->get('get/parameter/1', 'DashboardAltLine6::getDataParameterALT1');
    $routes->get('get/total/data/1', 'DashboardAltLine6::getDataTodayALT1');
    $routes->get('get/total/ok/1', 'DashboardAltLine6::getDataOKTodayALT1');
    $routes->get('get/total/ng/1', 'DashboardAltLine6::getDataNGTodayALT1');
    //distinctalt1date
    $routes->get('get/distinct/cell1/date/(:any)', 'DashboardAltLine6::getDistinct_ALT1_cell1byDate/$1');
    $routes->get('get/distinct/cell3/date/(:any)', 'DashboardAltLine6::getDistinct_ALT1_cell3byDate/$1');
    $routes->get('get/distinct/cell5/date/(:any)', 'DashboardAltLine6::getDistinct_ALT1_cell5byDate/$1');
    //ALT2
    $routes->get('dashboard/2', 'DashboardAltLine6::dashboard_alt2');
    $routes->get('get/all/cell2', 'DashboardAltLine6::getData_ALT2_cell2');
    $routes->get('get/all/cell4', 'DashboardAltLine6::getData_ALT2_cell4');
    $routes->get('get/all/cell6', 'DashboardAltLine6::getData_ALT2_cell6');
    $routes->get('get/distinct/cell2', 'DashboardAltLine6::getDistinct_ALT2_cell2');
    $routes->get('get/distinct/cell4', 'DashboardAltLine6::getDistinct_ALT2_cell4');
    $routes->get('get/distinct/cell6', 'DashboardAltLine6::getDistinct_ALT2_cell6');
    //filter data alt 2
    $routes->get('get/cell2/date/(:any)', 'DashboardAltLine6::getDataActualCell2ByDate/$1');
    $routes->get('get/cell4/date/(:any)', 'DashboardAltLine6::getDataActualCell4ByDate/$1');
    $routes->get('get/cell6/date/(:any)', 'DashboardAltLine6::getDataActualCell6ByDate/$1');
    //layout mode data
    $routes->get('get/parameter/2', 'DashboardAltLine6::getDataParameterALT2');
    $routes->get('get/total/data/2', 'DashboardAltLine6::getDataTodayALT2');
    $routes->get('get/total/ok/2', 'DashboardAltLine6::getDataOKTodayALT2');
    $routes->get('get/total/ng/2', 'DashboardAltLine6::getDataNGTodayALT2');
    //distinct data with date
    $routes->get('get/distinct/cell2/date/(:any)', 'DashboardAltLine6::getDistinct_ALT2_cell2byDate/$1');
    $routes->get('get/distinct/cell4/date/(:any)', 'DashboardAltLine6::getDistinct_ALT2_cell4byDate/$1');
    $routes->get('get/distinct/cell6/date/(:any)', 'DashboardAltLine6::getDistinct_ALT2_cell6byDate/$1');
});


//line 5
$routes->group("apbline5",  function ($routes) {
    //APB1
    $routes->get('dashboard/1', 'DashboardApbLine5::dashboard_apb1');
    $routes->get('get/temp/left1', 'DashboardApbLine5::getData_APB1_tempLeftActual');
    $routes->get('get/temp/right1', 'DashboardApbLine5::getData_APB1_tempRightActual');
    $routes->get('distinct/left1', 'DashboardApbLine5::getDistinct_APB1_tempLeftActual');
    $routes->get('distinct/right1', 'DashboardApbLine5::getDistinct_APB1_tempRightActual');
    $routes->get('get/temp/left1/date/(:any)', 'DashboardApbLine5::getDataByDate_APB1_tempLeft/$1');
    $routes->get('get/temp/right1/date/(:any)', 'DashboardApbLine5::getDataByDate_APB1_tempRight/$1');
    //layout mode
    //get layout mode
    $routes->get('get/parameter/1', 'DashboardApbLine5::getDataParameterAPB1');
    $routes->get('get/total/data/1', 'DashboardApbLine5::getDataTodayAPB1');
    //APB2
    $routes->get('dashboard/2', 'DashboardApbLine5::dashboard_apb2');
    $routes->get('get/temp/left2', 'DashboardApbLine5::getData_APB2_tempLeftActual');
    $routes->get('get/temp/right2', 'DashboardApbLine5::getData_APB2_tempRightActual');
    $routes->get('distinct/left2', 'DashboardApbLine5::getDistinct_APB2_tempLeftActual');
    $routes->get('distinct/right2', 'DashboardApbLine5::getDistinct_APB2_tempRightActual');
    $routes->get('get/temp/left2/date/(:any)', 'DashboardApbLine5::getDataByDate_APB2_tempLeft/$1');
    $routes->get('get/temp/right2/date/(:any)', 'DashboardApbLine5::getDataByDate_APB2_tempRight/$1');
    //layout mode data
    $routes->get('get/parameter/2', 'DashboardApbLine5::getDataParameterAPB2');
    $routes->get('get/total/data/2', 'DashboardApbLine5::getDataTodayAPB2');
});

$routes->group("hsmline5",  function ($routes) {
    //HSM1
    $routes->get('dashboard/1', 'DashboardHsmLine5::dashboard_hsm1');
    $routes->get('get/temp/left1', 'DashboardHsmLine5::getData_HSM1_tempLeft');
    $routes->get('get/temp/right1', 'DashboardHsmLine5::getData_HSM1_tempRight');
    $routes->get('distinct/left1', 'DashboardHsmLine5::getDistinct_HSM1_tempLeft');
    $routes->get('distinct/right1', 'DashboardHsmLine5::getDistinct_HSM1_tempRight');
    $routes->get('get/temp/left1/date/(:any)', 'DashboardHsmLine5::getDataByDate_HSM1_tempLeft/$1');
    $routes->get('get/temp/right1/date/(:any)', 'DashboardHsmLine5::getDataByDate_HSM1_tempRight/$1');
    $routes->get('get/type/battery1/first', 'DashboardHsmLine5::getDataTypeBatteryFirstHSM1');
    $routes->get('get/total/data1', 'DashboardHsmLine5::getTotalDataHSM1');
    $routes->get('get/type/battery', 'DashboardHsmLine5::getDataTypeBattery');
    $routes->get('get/type/1', 'DashboardHsmLine5::getlastDandoriTypeHSM1');
    $routes->get('get/data/ok/1', 'DashboardHsmLine5::getTotalDataOKHSM1');
    $routes->get('get/data/parameter/1', 'DashboardHsmLine5::getParameterData1');
    //HSM2
    $routes->get('dashboard/2', 'DashboardHsmLine5::dashboard_hsm2');
    $routes->get('get/temp/left2', 'DashboardHsmLine5::getData_HSM2_tempLeft');
    $routes->get('get/temp/right2', 'DashboardHsmLine5::getData_HSM2_tempRight');
    $routes->get('distinct/left2', 'DashboardHsmLine5::getDistinct_HSM2_tempLeft');
    $routes->get('distinct/right2', 'DashboardHsmLine5::getDistinct_HSM2_tempRight');
    $routes->get('get/temp/left2/date/(:any)', 'DashboardHsmLine5::getDataByDate_HSM2_tempLeft/$1');
    $routes->get('get/temp/right2/date/(:any)', 'DashboardHsmLine5::getDataByDate_HSM2_tempRight/$1');
    $routes->get('get/total/data2', 'DashboardHsmLine5::getTotalDataHSM2');
    $routes->get('get/type/battery/2', 'DashboardHsmLine6::getDataTypeBattery');
    $routes->get('get/type/2', 'DashboardHsmLine5::getlastDandoriTypeHSM2');
    $routes->get('get/data/ok/2', 'DashboardHsmLine5::getTotalDataOKHSM2');
    $routes->get('get/data/parameter/2', 'DashboardHsmLine5::getParameterData2');
});

$routes->group("altline5", function ($routes) {
    //ALT1
    $routes->get('dashboard/1', 'DashboardAltLine5::dashboard_alt1');
    $routes->get('get/all/cell1', 'DashboardAltLine5::getData_ALT1_cell1');
    $routes->get('get/all/cell3', 'DashboardAltLine5::getData_ALT1_cell3');
    $routes->get('get/all/cell5', 'DashboardAltLine5::getData_ALT1_cell5');
    $routes->get('get/distinct/cell1', 'DashboardAltLine5::getDistinct_ALT1_cell1');
    $routes->get('get/distinct/cell3', 'DashboardAltLine5::getDistinct_ALT1_cell3');
    $routes->get('get/distinct/cell5', 'DashboardAltLine5::getDistinct_ALT1_cell5');
    //filter data alt 1
    $routes->get('get/cell1/date/(:any)', 'DashboardAltLine5::getDataActualCell1ByDate/$1');
    $routes->get('get/cell3/date/(:any)', 'DashboardAltLine5::getDataActualCell3ByDate/$1');
    $routes->get('get/cell5/date/(:any)', 'DashboardAltLine5::getDataActualCell5ByDate/$1');
    //layout mode data
    $routes->get('get/parameter/1', 'DashboardAltLine5::getDataParameterALT1');
    $routes->get('get/total/data/1', 'DashboardAltLine5::getDataTodayALT1');
    $routes->get('get/total/ok/1', 'DashboardAltLine5::getDataOKTodayALT1');
    //ALT2
    $routes->get('dashboard/2', 'DashboardAltLine5::dashboard_alt2');
    $routes->get('get/all/cell2', 'DashboardAltLine5::getData_ALT2_cell2');
    $routes->get('get/all/cell4', 'DashboardAltLine5::getData_ALT2_cell4');
    $routes->get('get/all/cell6', 'DashboardAltLine5::getData_ALT2_cell6');
    $routes->get('get/distinct/cell2', 'DashboardAltLine5::getDistinct_ALT2_cell2');
    $routes->get('get/distinct/cell4', 'DashboardAltLine5::getDistinct_ALT2_cell4');
    $routes->get('get/distinct/cell6', 'DashboardAltLine5::getDistinct_ALT2_cell6');
    //filter data alt 1
    $routes->get('get/cell2/date/(:any)', 'DashboardAltLine5::getDataActualCell2ByDate/$1');
    $routes->get('get/cell4/date/(:any)', 'DashboardAltLine5::getDataActualCell4ByDate/$1');
    $routes->get('get/cell6/date/(:any)', 'DashboardAltLine5::getDataActualCell6ByDate/$1');
    //layout mode data
    $routes->get('get/parameter/2', 'DashboardAltLine5::getDataParameterALT2');
    $routes->get('get/total/data/2', 'DashboardAltLine5::getDataTodayALT2');
    $routes->get('get/total/ok/2', 'DashboardAltLine5::getDataOKTodayALT2');
});
