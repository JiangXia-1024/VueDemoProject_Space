<template>
  <div id="blog-calendar" style="">

<table id="blogCalendar" class="Cal" title="Calendar" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td colspan="7">
                <table class="CalTitle" cellspacing="0" border="0">
                    <tbody>
                        <tr>
                            <td class="CalNextPrev">
                                <a href="javascript:void(0);" onclick="loadBlogCalendar('2019/08/06'); return false;">&lt;</a>
                            </td>
                            <td align="center">2019年9月</td>
                            <td class="CalNextPrev" align="right">
                                <a href="javascript:void(0);" onclick="loadBlogCalendar('2019/10/06'); return false;">&gt;</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
                    <th class="CalDayHeader" abbr="日" scope="col" align="center">日</th>
                    <th class="CalDayHeader" abbr="一" scope="col" align="center">一</th>
                    <th class="CalDayHeader" abbr="二" scope="col" align="center">二</th>
                    <th class="CalDayHeader" abbr="三" scope="col" align="center">三</th>
                    <th class="CalDayHeader" abbr="四" scope="col" align="center">四</th>
                    <th class="CalDayHeader" abbr="五" scope="col" align="center">五</th>
                    <th class="CalDayHeader" abbr="六" scope="col" align="center">六</th>
        </tr>
            <tr>
                        <td class="CalWeekendDay" align="center">
                            1
                        </td>
                        <td class="" align="center">
                            <a href="https://www.cnblogs.com/ooo0/archive/2019/09/02.html"><u>2</u></a>
                        </td>
                        <td class="" align="center">
                            <a href="https://www.cnblogs.com/ooo0/archive/2019/09/03.html"><u>3</u></a>
                        </td>
                        <td class="" align="center">
                            4
                        </td>
                        <td class="" align="center">
                            <a href="https://www.cnblogs.com/ooo0/archive/2019/09/05.html"><u>5</u></a>
                        </td>
                        <td class="CalTodayDay" align="center">
                            6
                        </td>
                    <td class="CalWeekendDay" align="center">
                        7
                    </td>
            </tr>
                <tr>
                        <td class="CalWeekendDay" align="center">
                            8
                        </td>
                            <td class="" align="center">
                                9
                            </td>
                            <td class="" align="center">
                                10
                            </td>
                            <td class="" align="center">
                                11
                            </td>
                            <td class="" align="center">
                                12
                            </td>
                            <td class="" align="center">
                                13
                            </td>
                        <td class="CalWeekendDay" align="center">
                            14
                        </td>
                </tr>
                <tr>
                        <td class="CalWeekendDay" align="center">
                            15
                        </td>
                            <td class="" align="center">
                                16
                            </td>
                            <td class="" align="center">
                                17
                            </td>
                            <td class="" align="center">
                                18
                            </td>
                            <td class="" align="center">
                                19
                            </td>
                            <td class="" align="center">
                                20
                            </td>
                        <td class="CalWeekendDay" align="center">
                            21
                        </td>
                </tr>
                <tr>
                        <td class="CalWeekendDay" align="center">
                            22
                        </td>
                            <td class="" align="center">
                                23
                            </td>
                            <td class="" align="center">
                                24
                            </td>
                            <td class="" align="center">
                                25
                            </td>
                            <td class="" align="center">
                                26
                            </td>
                            <td class="" align="center">
                                27
                            </td>
                        <td class="CalWeekendDay" align="center">
                            28
                        </td>
                </tr>
                <tr>
                        <td class="CalWeekendDay" align="center">
                            29
                        </td>
                            <td class="" align="center">
                                30
                            </td>
                            <td class="CalOtherMonthDay" align="center">
                                1
                            </td>
                            <td class="CalOtherMonthDay" align="center">
                                2
                            </td>
                            <td class="CalOtherMonthDay" align="center">
                                3
                            </td>
                            <td class="CalOtherMonthDay" align="center">
                                4
                            </td>
                        <td class="CalOtherMonthDay" align="center">
                            5
                        </td>
                </tr>
                <tr>
                        <td class="CalOtherMonthDay" align="center">
                            6
                        </td>
                            <td class="CalOtherMonthDay" align="center">
                                7
                            </td>
                            <td class="CalOtherMonthDay" align="center">
                                8
                            </td>
                            <td class="CalOtherMonthDay" align="center">
                                9
                            </td>
                            <td class="CalOtherMonthDay" align="center">
                                10
                            </td>
                            <td class="CalOtherMonthDay" align="center">
                                11
                            </td>
                        <td class="CalOtherMonthDay" align="center">
                            12
                        </td>
                </tr>
    </tbody>
</table></div>
</template>

<script>
export default {
    name:"rili"
};
</script>

<style>
    #blog-calendar {
    width: 228px;
    padding-bottom: 5px;
    margin-bottom: 35px;
    box-shadow: 0 1px 3px #ccc;
    border: 1px solid #ededed;
    }
</style>