var hometemplate="";
hometemplate += "<div class=\"template content\">";
hometemplate += "    <div class=\"white-head text-center\">";
hometemplate += "        <h3>Be a Dell<\/h3>";
hometemplate += "        <h1>All Rounder<\/h1>";
hometemplate += "    <\/div>";
hometemplate += "";
hometemplate += "    <div class=\"row\">";
hometemplate += "        <div class=\"col-md-5\">";
hometemplate += "            <div class=\"padding-top dell-input\">";
hometemplate += "                <form ng-submit=\"register(submit);\">";
hometemplate += "                    <input type=\"text\" required=\"required\" class=\"form-control\" placeholder=\"Name\" ng-model=\"submit.name\">";
hometemplate += "                    <input type=\"email\" class=\"form-control\" placeholder=\"Email Id\" ng-model=\"submit.email\">";
hometemplate += "                    <input type=\"text\" onkeypress='return event.charCode >= 48 && event.charCode <= 57' class=\"form-control\" placeholder=\"Mobile Number\" ng-model=\"submit.phone\">";
hometemplate += "                    <div class=\"text-center\">";
hometemplate += "                        <button class=\"btn btn-default btn-dell\" type=\"submit\" ng-hide=\"submit.name=='' || submit.email=='' || submit.phone=='' || !submit.email\" ng-click=\"register(submit);\">Submit<\/button>";
hometemplate += "                    <\/div>";
hometemplate += "                <\/form>";
hometemplate += "            <\/div>";
hometemplate += "        <\/div>";
hometemplate += "        <div class=\"col-md-7\">";
hometemplate += "            <img src=\"img\/laptop.png\" alt=\"\" class=\"img-responsive\">";
hometemplate += "        <\/div>";
hometemplate += "    <\/div>";
hometemplate += "<\/div>";




var areyoutemplate="";
areyoutemplate += "<div class=\"white-head text-center lower\">";
areyoutemplate += "    <h2>Are you game ?<\/h2>";
areyoutemplate += "<\/div>";
areyoutemplate += "";
areyoutemplate += "<div class=\"bottom\">";
areyoutemplate += "    <div class=\"white-head text-center lower\">";
areyoutemplate += "        <h2>Flip, draw, swipe and<br>become the Dell All rounder<\/h2>";
areyoutemplate += "        <div class=\"text-center margin-top\">";
areyoutemplate += "            <a class=\"btn btn-default btn-dell\" href=\"#\/dots\">Participate Now<\/a>";
areyoutemplate += "        <\/div>";
areyoutemplate += "    <\/div>";
areyoutemplate += "";
areyoutemplate += "<\/div>";


var dotstemplate="";
dotstemplate += "<div class=\"text-center\">";
dotstemplate += "    <div class=\"timer\">";
dotstemplate += "        <h3>Time<\/h3>";
dotstemplate += "        <div class=\"times\">{{mins}}:{{seconds}}<\/div>";
dotstemplate += "    <\/div>";
dotstemplate += "<\/div>";
dotstemplate += "";
dotstemplate += "<div class=\"white-overlay\">";
dotstemplate += "    <h2>Connect the Dots<\/h2>";
dotstemplate += "";
dotstemplate += "    <div>";
dotstemplate += "        <div class=\"dotssection\">";
dotstemplate += "            <img ng-src=\"img\/dots\/connect_{{connectnumber}}.png\" alt=\"\">";
dotstemplate += "            <div>";
dotstemplate += "                <div class=\"round\" ng-click=\"changenumber(1);\" style=\"left:102px;top:81px;\"><\/div>";
dotstemplate += "                <div class=\"round\" ng-click=\"changenumber(2);\" style=\"left:131px;top:27px;\"><\/div>";
dotstemplate += "                <div class=\"round\" ng-click=\"changenumber(3);\" style=\"left:177px;top:61px;\"><\/div>";
dotstemplate += "                <div class=\"round\" ng-click=\"changenumber(4);\" style=\"left:181px;top:92px;\"><\/div>";
dotstemplate += "                <div class=\"round\" ng-click=\"changenumber(5);\" style=\"left:156px;top:117px;\"><\/div>";
dotstemplate += "                <div class=\"round\" ng-click=\"changenumber(6);\" style=\"left:197px;top:146px;\"><\/div>";
dotstemplate += "                <div class=\"round\" ng-click=\"changenumber(7);\" style=\"left:266px;top:5px;\"><\/div>";
dotstemplate += "                <div class=\"round\" ng-click=\"changenumber(8);\" style=\"left:229px;top:136px;\"><\/div>";
dotstemplate += "                <div class=\"round\" ng-click=\"changenumber(9);\" style=\"left:188px;top:196px;\"><\/div>";
dotstemplate += "                <div class=\"round\" ng-click=\"changenumber(10);\" style=\"left:237px;top:261px;\"><\/div>";
dotstemplate += "                <div class=\"round\" ng-click=\"changenumber(11);\" style=\"left:283px;top:313px;\"><\/div>";
dotstemplate += "                <div class=\"round\" ng-click=\"changenumber(12);\" style=\"left:293px;top:405px;\"><\/div>";
dotstemplate += "                <div class=\"round\" ng-click=\"changenumber(13);\" style=\"left:254px;top:435px;\"><\/div>";
dotstemplate += "                <div class=\"round\" ng-click=\"changenumber(14);\" style=\"left:227px;top:314px;\"><\/div>";
dotstemplate += "                <div class=\"round\" ng-click=\"changenumber(15);\" style=\"left:117px;top:330px;\"><\/div>";
dotstemplate += "                <div class=\"round\" ng-click=\"changenumber(16);\" style=\"left:31px;top:411px;\"><\/div>";
dotstemplate += "                <div class=\"round\" ng-click=\"changenumber(17);\" style=\"left:20px;top:376px;\"><\/div>";
dotstemplate += "                <div class=\"round\" ng-click=\"changenumber(18);\" style=\"left:59px;top:334px;\"><\/div>";
dotstemplate += "                <div class=\"round\" ng-click=\"changenumber(19);\" style=\"left:93px;top:222px;\"><\/div>";
dotstemplate += "                <div class=\"round\" ng-click=\"changenumber(20);\" style=\"left:97px;top:101px;\"><\/div>";
dotstemplate += "";
dotstemplate += "";
dotstemplate += "            <\/div>";
dotstemplate += "        <\/div>";
dotstemplate += "";
dotstemplate += "    <\/div>";
dotstemplate += "<\/div>";
dotstemplate += "";
dotstemplate += "";
dotstemplate += "<div class=\"padding-20 text-center\">";
dotstemplate += "    <!--<button class=\"btn btn-default btn-dell\" href=\"#\/message\">Submit<\/button>-->";
dotstemplate += "    <button class=\"btn btn-default btn-dell submit\" ng-show=\"participated\" ng-click=\"gotomessage();\">Submit<\/button>";
dotstemplate += "<\/div>";
dotstemplate += "";





var messagetemplate="";
messagetemplate += "<div class=\"margin-50 pad-top white-overlay text-center\">";
messagetemplate += "    <script type=\"text\/javascript\">";
messagetemplate += "    $(document).ready(function()";
messagetemplate += "		{";
messagetemplate += "            $(\"#canvase\").jqScribble({width:\"1233\",height:\"564\",backgroundColor:\"rgba(0,0,0,0)\"});";
messagetemplate += "        $('.clear').click(function() {";
messagetemplate += "            $('#canvase').data('jqScribble').clear();";
messagetemplate += "            \/*$('#canvase').data('jqScribble').save()*\/";
messagetemplate += "        });";
messagetemplate += "        ";
messagetemplate += "        ";
messagetemplate += "        ";
messagetemplate += "		});";
messagetemplate += "    <\/script>";
messagetemplate += "    <div class=\"writehere1\" id=\"canvasholder\" >";
messagetemplate += "    <canvas id=\"canvase\" width=\"576px;\" class=\"writehere\"><\/canvas>";
messagetemplate += "    <\/div>";
messagetemplate += "<\/div>";
messagetemplate += "<div class=\"padding-20 text-center\">";
messagetemplate += "    <button class=\"btn btn-default btn-dell clear\">Clear<\/button>";
messagetemplate += "    <button class=\"btn btn-default btn-dell submit\" ng-click=\"submitmessage();\">Submit<\/button>";
messagetemplate += "<\/div>";



var nexttemplate="";
nexttemplate += "<div class=\"white-overlay margin-100 relative\">";
nexttemplate += "    <div class=\"middle shadowed blue\">";
nexttemplate += "        <h4>Move to the next level.<\/h4>";
nexttemplate += "        <p>How well do you know";
nexttemplate += "            <br>the Indian Cricket players?<\/p>";
nexttemplate += "";
nexttemplate += "        <div class=\"padding-20 text-center\">";
nexttemplate += "            <!--<button class=\"btn btn-default btn-dell\">Start Now<\/button>-->";
nexttemplate += "            <a class=\"btn btn-default btn-dell\" href=\"#\/jersey\">Start Now<\/a>";
nexttemplate += "        <\/div>";
nexttemplate += "    <\/div>";
nexttemplate += "<\/div>";


var jerseytemplate="";
jerseytemplate += "<div class=\"text-center\">";
jerseytemplate += "    <div class=\"timer\">";
jerseytemplate += "        <h3>Time<\/h3>";
jerseytemplate += "        <div class=\"times\">{{mins}}:{{seconds}}<\/div>";
jerseytemplate += "    <\/div>";
jerseytemplate += "<\/div>";
jerseytemplate += "";
jerseytemplate += "<div class=\"white-overlay padding-10\">";
jerseytemplate += "    <div class=\"text-center shadowed blue\">";
jerseytemplate += "        <h4>Match the jersey to the player<\/h4>";
jerseytemplate += "    <\/div>";
jerseytemplate += "    <div class=\"row cricketer\">";
jerseytemplate += "        <div class=\"col-xs-3\">";
jerseytemplate += "            <img src=\"img\/dhoni.png\" alt=\"\" class=\"img-responsive\">";
jerseytemplate += "        <\/div>";
jerseytemplate += "        <div class=\"col-xs-3\">";
jerseytemplate += "            <img src=\"img\/virat.png\" alt=\"\" class=\"img-responsive\">";
jerseytemplate += "        <\/div>";
jerseytemplate += "        <div class=\"col-xs-3\">";
jerseytemplate += "            <img src=\"img\/dhawan.png\" alt=\"\" class=\"img-responsive\">";
jerseytemplate += "        <\/div>";
jerseytemplate += "        <div class=\"col-xs-3\">";
jerseytemplate += "            <img src=\"img\/raina.png\" alt=\"\" class=\"img-responsive\">";
jerseytemplate += "        <\/div>";
jerseytemplate += "    <\/div>";
jerseytemplate += "    <div class=\"showscore\" ng-show=\"scoreshow\">";
jerseytemplate += "        You Scored<\/br>{{score}}\/4";
jerseytemplate += "    <\/div>";
jerseytemplate += "    <div class=\"row margin-50 cricketer jersey\">";
jerseytemplate += "        <div ng-repeat=\"obj in draggableObjects\" class=\"col-xs-3 active\" ng-drop=\"true\" ng-drop-success=\"onDropComplete($index, $data,$event)\">";
jerseytemplate += "            <div ng-drag=\"true\" class=\"jerseyinside\" ng-drag-data=\"obj\" ng-class=\"obj.name\">";
jerseytemplate += "                <img src=\"img\/jersey.png\" alt=\"\" class=\"img-responsive\" ng-class=\"{jerseyright: obj.value}\">";
jerseytemplate += "                <div class=\"jersey-number\">{{obj.name}}<\/div>";
jerseytemplate += "            <\/div>";
jerseytemplate += "        <\/div>";
jerseytemplate += "    <\/div>";
jerseytemplate += "";
jerseytemplate += "<\/div>";
jerseytemplate += "<div class=\"padding-20 text-center\">";
jerseytemplate += "    <button class=\"btn btn-default btn-dell\" ng-click=\"getresult()\" ng-show=\"showbutton\">Submit<\/button>";
jerseytemplate += "<\/div>";




var thinktemplate="";
thinktemplate += "<div class=\"white-head text-center lower fit\">";
thinktemplate += "    <h2>We would love to get your feedback<\/h2>";
thinktemplate += "<\/div>";
thinktemplate += "";
thinktemplate += "<div class=\"white-overlay thinkpage form-field\">";
thinktemplate += "";
thinktemplate += "    <div class=\"row\" style=\"padding-top: 30px;margin-top:30px;\">";
thinktemplate += "        <div class=\"col-md-6\">";
thinktemplate += "";
thinktemplate += "            <div class=\"innerthink\">";
thinktemplate += "                <h3 class=\"blued1\">How would the 2-in-1 be useful to you?<\/h3>";
thinktemplate += "                <div class=\"innerform\">";
thinktemplate += "                    <div class=\"innercheckbox\">";
thinktemplate += "                        <div class=\"row\">";
thinktemplate += "                            <div class=\"col-xs-6\">";
thinktemplate += "                                <input type=\"checkbox\" ng-model=\"think.travel\" ng-true-value=\"1\" ng-false-value=\"0\">Convienient for travel";
thinktemplate += "                                <br>";
thinktemplate += "                                <input type=\"checkbox\" ng-model=\"think.harddrive\" ng-true-value=\"1\" ng-false-value=\"0\">Plenty of hard drive space";
thinktemplate += "                                <br>";
thinktemplate += "                                <input type=\"checkbox\" ng-model=\"think.alluse\" ng-true-value=\"1\" ng-false-value=\"0\">All of above";
thinktemplate += "                            <\/div>";
thinktemplate += "";
thinktemplate += "                            <div class=\"col-xs-6\">";
thinktemplate += "                                <input type=\"checkbox\" ng-model=\"think.versatile\" ng-true-value=\"1\" ng-false-value=\"0\">Versatile device for work and home";
thinktemplate += "                                <br>";
thinktemplate += "                                <input type=\"checkbox\" ng-model=\"think.builtinstylus\" ng-true-value=\"1\" ng-false-value=\"0\">Freedom of built-in stylus";
thinktemplate += "                                <br>";
thinktemplate += "                                <input type=\"checkbox\" ng-model=\"think.other\" ng-true-value=\"1\" ng-false-value=\"0\">Other";
thinktemplate += "                            <\/div>";
thinktemplate += "                        <\/div>";
thinktemplate += "                    <\/div>";
thinktemplate += "                    <textarea ng-model=\"think.otheruse\" placeholder=\"If other, please specify\"><\/textarea>";
thinktemplate += "";
thinktemplate += "                <\/div>";
thinktemplate += "                <h3 class=\"blued1\">Would you recommend Dell Inspiron 2-in-1 to others?<\/h3>";
thinktemplate += "                <div class=\"row\">";
thinktemplate += "                    <div class=\"col-xs-4\">";
thinktemplate += "                        <input type=\"radio\" ng-model=\"think.recommend\" ng-value=\"1\" name=\"recommend\">Yes<\/div>";
thinktemplate += "                    <div class=\"col-xs-8\">";
thinktemplate += "                        <input type=\"radio\" ng-model=\"think.recommend\" ng-value=\"0\" name=\"recommend\">No<\/div>";
thinktemplate += "                <\/div>";
thinktemplate += "            <\/div>";
thinktemplate += "";
thinktemplate += "";
thinktemplate += "        <\/div>";
thinktemplate += "        <div class=\"col-md-6\">";
thinktemplate += "            <div class=\"innerthink\">";
thinktemplate += "                <h3 class=\"blued1\">Which is the best feature of the 2-in-1?<\/h3>";
thinktemplate += "                <div class=\"innerform\">";
thinktemplate += "                    <div class=\"innercheckbox\">";
thinktemplate += "                        <div class=\"row\">";
thinktemplate += "                            <div class=\"col-md-6\">";
thinktemplate += "                                <input type=\"checkbox\" ng-model=\"think.flexibility\" ng-true-value=\"1\" ng-false-value=\"0\">Flexibility";
thinktemplate += "                                <br>";
thinktemplate += "                                <input type=\"checkbox\" ng-model=\"think.lightweight\" ng-true-value=\"1\" ng-false-value=\"0\">Light weight";
thinktemplate += "                                <br>";
thinktemplate += "                                <input type=\"checkbox\" ng-model=\"think.easytocarry\" ng-true-value=\"1\" ng-false-value=\"0\">East to carry";
thinktemplate += "                                <br>";
thinktemplate += "                                <input type=\"checkbox\" ng-model=\"think.allfeature\" ng-true-value=\"1\" ng-false-value=\"0\">All of above";
thinktemplate += "                            <\/div>";
thinktemplate += "";
thinktemplate += "                            <div class=\"col-md-6\">";
thinktemplate += "                                <input type=\"checkbox\" ng-model=\"think.screenclarity\" ng-true-value=\"1\" ng-false-value=\"0\">Screen clarity and touch pad";
thinktemplate += "                                <br>";
thinktemplate += "                                <input type=\"checkbox\" ng-model=\"think.stylus\" ng-true-value=\"1\" ng-false-value=\"0\">Stylus";
thinktemplate += "                                <br>";
thinktemplate += "                                <input type=\"checkbox\" ng-model=\"think.easytouse\" ng-true-value=\"1\" ng-false-value=\"0\">Easy to use";
thinktemplate += "                                <br>";
thinktemplate += "                                <input type=\"checkbox\" ng-model=\"think.other\" ng-true-value=\"1\" ng-false-value=\"0\">Other";
thinktemplate += "                            <\/div>";
thinktemplate += "                        <\/div>";
thinktemplate += "                    <\/div>";
thinktemplate += "                    <textarea ng-model=\"think.otherfeature\" placeholder=\"If other, please specify\"><\/textarea>";
thinktemplate += "                    <div class=\"blue joiner othercheckbox\">";
thinktemplate += "                        <h3><input type=\"checkbox\" ng-model=\"think.updates\" ng-true-value=\"1\" ng-false-value=\"0\">I would like promotional updates from Dell India<\/h3>";
thinktemplate += "                    <\/div>";
thinktemplate += "                <\/div>";
thinktemplate += "";
thinktemplate += "";
thinktemplate += "";
thinktemplate += "            <\/div>";
thinktemplate += "        <\/div>";
thinktemplate += "    <\/div>";
thinktemplate += "";
thinktemplate += "";
thinktemplate += "";
thinktemplate += "";
thinktemplate += "";
thinktemplate += "";
thinktemplate += "<\/div>";
thinktemplate += "";
thinktemplate += "";
thinktemplate += "<div class=\"padding-20 text-center\">";
thinktemplate += "    <button class=\"btn btn-default btn-dell\" ng-click=\"thinksubmit()\">Submit<\/button>";
thinktemplate += "<\/div>";



var selecttemplate="";
selecttemplate += "<div class=\"white-head text-center lower\">";
selecttemplate += "    <h3>Select your favourite mode<\/h3>";
selecttemplate += "<\/div>";
selecttemplate += "<div class=\"container\">";
selecttemplate += "    <carousel interval=\"myInterval\">";
selecttemplate += "        <slide ng-repeat=\"slide in slides\" active=\"slide.active\">";
selecttemplate += "            <img ng-src=\"img\/{{slide.image}}\" style=\"margin:auto;\">";
selecttemplate += "            <div class=\"white-head text-center lower no-margin\">";
selecttemplate += "                <h3>{{slide.mode}}<\/h3>";
selecttemplate += "            <\/div>";
selecttemplate += "            <div class=\"carousel-caption text-center\">";
selecttemplate += "                <button class=\"btn btn-default btn-dell\" ng-click=\"gotocertificate($index)\">Select<\/button>";
selecttemplate += "            <\/div>";
selecttemplate += "        <\/slide>";
selecttemplate += "    <\/carousel>";
selecttemplate += "<\/div>";





var certitemplate="";
certitemplate += "<div class=\"white-head text-center lower no-margin\">";
certitemplate += "    <h3>Continue your participation<\/h3>";
certitemplate += "    <div class=\"blue\">";
certitemplate += "        <h4>Visit www.dellallrounder.in<\/h4>";
certitemplate += "    <\/div>";
certitemplate += "<div class=\"centerlaptop\">";
certitemplate += "    <div id=\"savearea\" class=\"text-center\" ng-class='canvascolor' >";
certitemplate += "        <div class=\"laptop\"  ng-class=\"laptopclass\">";
certitemplate += "            <div class=\"\">";
certitemplate += "                <div class=\"certitext\">";
certitemplate += "                    <p class=\"nameclass\" style=\"font-size:24px\">{{uname}}<\/p>";
certitemplate += "                    <p>completed the<\/br> Dell All Rounder Challenge <\/br>in {{mins}} mins and {{seconds}} seconds<\/p>";
certitemplate += "                <\/div>";
certitemplate += "                <img class=\"messageimage\">";
certitemplate += "            <\/div>";
certitemplate += "        <\/div>";
certitemplate += "    <\/div>";
certitemplate += "<\/div>";
certitemplate += "<div id=\"img-out\"><\/div>";
certitemplate += "<div class=\"padding-20 text-center\">";
certitemplate += "    <!--<button class=\"btn btn-default btn-dell clear btnSave\">Save<\/button>-->";
certitemplate += "    <button class=\"btn btn-default btn-dell clear\" ng-show='showlogout==1' ng-click=\"logout();\">Logout<\/button>";
certitemplate += "<\/div>";








var synctemplate="";
synctemplate += "<div class=\"white-overlay margin-100 relative\">";
synctemplate += "    <div class=\"middle shadowed blue\">";
synctemplate += "        <h4>Sync all data to the online database<\/h4>";
synctemplate += "        <p>Please make sure there is Internet connection<\/p>";
synctemplate += "";
synctemplate += "        <div class=\"padding-20 text-center\">";
synctemplate += "            <button class=\"btn btn-default btn-dell\" ng-click=\"sendtodb();\">Sync Now<\/button>";
synctemplate += "        <\/div>";
synctemplate += "    <\/div>";
synctemplate += "<\/div>";

