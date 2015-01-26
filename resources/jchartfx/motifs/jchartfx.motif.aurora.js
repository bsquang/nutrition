(function(){var f=window.cfx,a=window.sfx;f.motif="aurora";var i=a["gauge.templates"];if(void 0!=i){i.auroraDashBorder='<T><T.R><s K="plotMargin">targetChart</s></T.R><C><B F="{B F}"><g M="1"><g.RD><RD H="Auto" MinHeight="10"/><RD H="*"/><RD H="Auto" MinHeight="32"/><RD H="Auto" MinHeight="4"/></g.RD><B g.R="0" H="1" F="#33000000"/><B g.R="1" F="{B F}"><C N="targetChart" M="4"/></B><B g.R="2" F="{B F}"><TextBlock M="21,8,21,8" Text="{B Title}" VerticalAlignment="Center" HorizontalAlignment="Center" Foreground="{Binding Class=DashboardTitle.fill}" FontSize="{Binding Class=DashboardTitle.font-size}" FontFamily="{Binding Class=DashboardTitle.font-family}"/></B><B g.R="3" H="4" F="#33000000"></B></g></B></C></T>';
i.auroraRadialDashBorder="<T/>";i.auroraRadialIndicator="NeedleRegularDrop";i.auroraRadialCap='<T><E F="{B F}"/><E S="#11333333" ST="3"/></T>';i.auroraRadialGlare="<T/>";i.auroraLinearDashBorder="<T/>";i.auroraLinearGlare="<T/>";i.auroraLinearFiller='<T><C M="0"><B F="{B F}" CR="5"/><B S="#11333333" ST="3" CR="5"/></C></T>';i.auroraRadialFiller='<T><C M="0"><P D="{B G}" F="{B F}"/><P D="{B G}" S="#11333333" ST="3"/></C></T>';i.auroraRadialBar='<T><C M="0"><P D="{B G}" F="{B F}"/><P D="{B G}" S="#11333333" ST="3"/><P D="{B G}"><P.F><L S="0,0" E="0,1" ><G C="#22000000" O="0"/><G C="#00000000" O="1"/></L></P.F></P></C></T>';
i.auroraLinearBar='<T><C M="0"><B F="{B F}" CR="5"/><B S="#11333333" ST="3" CR="5"/><B CR="5"><B.F><L S="0,0" E="0,1" ><G C="#22000000" O="0"/><G C="#00000000" O="1"/></L></B.F></B></C></T>';var k=new f.gauge.Palette;k.setColors(["#20CFB6","#373A41","#20CFB6","#373A41","#329287","#266E66","#329287","#266E66","#626364",null,"#AAAFB9","#2F3238","#151619",null,"#E04E61","#A83B49",null,"#E9EA52","#AFB03E",null,"#65C773","#4C9657",null,"#C0C0C0","#C0C0C0","#868A8E","#868A8E","#808080","#AAAFB9","#E04E61",
"#E9EA52","#65C773","#868A8E","#26292D","#202327"]);f.gauge.Palette.setDefaultPalette(k)}a=a["vector.templates"];void 0!=a&&(a["DashboardTitle.fill"]="0,#868A8E",a["DashboardTitle.font-family"]="1,'Roboto', sans-serif",a["DashboardTitle.font-size"]="2,11",a["AxisY_Text.fill"]="0,#626364",a.auroraBorder='<T><T.R><s K="plotMargin">targetChart</s><Th K="externalMargin">16</Th><Th K="internalRectMargin">0</Th><T K="internalRect"><B CR="6" F="{B F}" S="{B S}" CP="0.5"/></T><T K="internal"><Line S="{B S}" X1="{B X1}" X2="{B X2}" Y1="{B Y1}" Y2="{B Y2}"/></T></T.R><C><B F="{B F}"><g M="1"><g.RD><RD H="Auto" MinHeight="10"/><RD H="*"/><RD H="Auto" MinHeight="32"/><RD H="Auto" MinHeight="4"/></g.RD><B g.R="0" H="1" F="#33000000"/><B g.R="1" F="{B F}"><C N="targetChart" M="20,0,20,0"/></B><B g.R="2" F="{B F}"><TextBlock M="21,8,21,8" Text="{B Title}" VerticalAlignment="Center" HorizontalAlignment="Center" Foreground="{Binding Class=DashboardTitle.fill}" FontSize="{Binding Class=DashboardTitle.font-size}" FontFamily="{Binding Class=DashboardTitle.font-family}"/></B><B g.R="3" H="4" F="#33000000"></B></g></B></C></T>',
a.auroraBar='<T><C M="0"><B F="{B F}" CR="5"/><B S="#11333333" ST="3" CR="5"/></C></T>',a.auroraGantt=a.auroraBar,a.auroraArea='<T><T.R><D K="cfxDefStrokeThickness">3</D></T.R><C><Po P="{B P}" F="{B F}"/><Po P="{B P}" S="#11333333" ST="3"/></C></T>',a.auroraLine="LineBasic",a.auroraCurve="CurveBasic",a.auroraCurveArea='<T><C><P D="{B G}" F="{B F}"/><P D="{B G}" S="#11333333" ST="3"/></C></T>',a.auroraBubble='<T><C><E F="{B F}"/><E S="#11333333" ST="3"/></C></T>',a.auroraOverlayBubble=a.auroraBubble,
a.auroraPyramid='<T><C><Po P="{B P}" F="{B F}" S="{B S}" ST="{B ST}"/><Po P="{B P}" S="#11333333" ST="3"/></C></T>',a.auroraFunnel=a.auroraPyramid,a.auroraPie='<T><P D="{B G}" F="{B F}"/><P D="{B G}" S="#11333333" ST="3"/></T>',a.auroraDoughnut=a.auroraPie,a.auroraTreeMap=a.auroraBar,a.auroraHeatMap=a.auroraBar,a.auroraDensity='<T xmlns:x="a"><C M="0"><B F="{B F}" CR="5"/><B S="#11333333" ST="1" CR="5"/></C></T>',a.auroraSparklineLine=a.auroraLine,a.auroraSparklineBar=a.auroraBar,a.auroraSparklineArea=
a.auroraArea,a.auroraSparklineCurve=a.auroraCurve,a.auroraSparklineCurveArea=a.auroraCurveArea,a.auroraBullet='<T><T.R><T K="templateLine"><Line X1="{B X1}" X2="{B X2}" Y1="{B Y1}" Y2="{B Y2}" S="{B S}" ST="3"/></T></T.R><C><B F="{B F}" CR="5"/><B S="#11333333" ST="1" CR="5"/></C></T>',a.auroraEqualizer='<T><T.R><T K="off"><C><B A="{B Opacity}" F="{B F}" CR="2" CP="1"/><B A="{B Opacity}" S="#11333333" ST="1" CR="2" CP="1"/></C></T></T.R><C><B A="{B Opacity}" F="{B F}" CR="2" CP="1"/><B A="{B Opacity}" S="#11333333" ST="1" CR="2" CP="1"/></C></T>',
a.auroraRose='<T><T.R><D K="cfxDefStrokeThickness">3</D></T.R><C><P D="{B G}" F="{B F}"/><P D="{B G}" S="#11333333" ST="3"/></C></T>',a.auroraMarker1='<T><B F="{B F}" S="{B S}" ST="{B ST}" CR="5"/></T>',a=new f.Palette,a.setColors("#329287 #477EA5 #75AE50 #50525D #965994 #65c773 #5abec7 #ce9884 #5f6775 #e9ea52 #e04e61 #6fe4c8 #eca63f #99d0a0 #ce8fbe #8dc3e0 #373A41 #373A41 #00000000 #20CFB6 #313439 #3D4148 #848F93 #5B6472 #626364 #626364 #00000000 #868A8E #00000000 #626364 #00000000 #373A41 #626364 #3D4148 #727374 #313439 #868A8E #313439 #373A41 #868A8E #26292D #202327".split(" ")),
f.Chart.setDefaultPalette(a));var e=function(){};f.motifs.aurora=e;e.getStyleInfo=function(c){var a="";if(c!==void 0){c=c[0];c!==void 0&&(a=c[0])}c={isGroup:false};c.name=a;c.isSingle=false;c.isBullet=false;c.sections=[];if(a!=void 0){a=a.toUpperCase();if(a.indexOf("SINGLE")>=0){c.isSingle=true;c.name=""}if(a.indexOf("GROUP")>=0){c.isGroup=true;c.name="";c.name=""}if(a.indexOf("BULLET")>=0){c.isBullet=true;c.name=""}if(a.indexOf("SECTIONS")>=0){var b,d;b=a.indexOf("SECTIONS");d=a.indexOf(":",b);if(d>
0){b=d;d=a.indexOf("-",b);a=d>=0?a.substring(b+1,d):a.substring(b+1,a.length);c.sections=a.split(",",100)}c.name=""}}return c};e.global=function(c){c.setFont("8pt 'Roboto', sans-serif")};e.radial=function(c,a){e.global(c);var b=e.getStyleInfo(a);b.name!=null&&c.setStyle(b.name);var d=c.getMainScale(),h=c.getMainIndicator();if(b.name=="progress"){d.setThickness(1);d.setPosition(0);b=d.getBar();b.setVisible(true);b.setTemplate(i.auroraRadialBar);b.setThickness(0.25);var b=d.getTickmarks(),g=b.getMajor();
g.setVisible(true);g.setWidth(0.01);g.setSize(0.04);g.setStyle(f.gauge.TickmarkStyle.Line);g.setPosition(0.03);d.setAlignment(f.StringAlignment.Near);d.setStartAngle(130);d.setSweepAngle(280);d=new f.gauge.Filler;d.setTemplate(i.auroraRadialFiller);d.setPosition(0.25);d.setSize(0.25);c.setMainIndicator(d)}else{d.setThickness(0.6);d.setPosition(0);d.setAllowHalves(false);b=d.getBar();b.setVisible(true);b.setTemplate(i.auroraRadialBar);b.setThickness(0.23);b.setPosition(0.34);b=d.getTickmarks();g=b.getMajor();
g.setVisible(true);g.setWidth(0.01);g.setSize(0.02);g.setStyle(f.gauge.TickmarkStyle.Line);g.setPosition(0);d.setAlignment(f.StringAlignment.Near);d.getCap().setSize(0.3);d.setStartAngle(140);d.setSweepAngle(260);h.setSize(0.9);h.setPosition(0.75);b.getMedium().setVisible(false);d=c.getDefaultAttributes();d.setSectionPosition(0.275);d.setSectionThickness(0.01)}};e.linear=function(c,a){e.global(c);var b=c.getMainScale(),d=b.getBar();d.setVisible(true);d.setPosition(0.25);b.setThickness(0.8);b.setAlignment(f.StringAlignment.Near);
var h=b.getTickmarks(),g=h.getMajor();g.setVisible(true);g.setSize(0.1);g.setStyle(f.gauge.TickmarkStyle.Line);g.setWidth(0.025);g.setPosition(0.75);h.getMedium().setVisible(false);h=c.getMainIndicator();h.setSize(0.35);h.setPosition(0.325);d.setTemplate(i.auroraLinearBar);b.setAllowHalves(false);d=e.getStyleInfo(a);if(d.isGroup){c.getBorder().setTemplate("<T/>");c.getDashboardBorder().setTemplate("<T/>")}if(d.isBullet){b.setThickness(0.8);b.setPosition(0);h.setSize(0.25);h.setPosition(0.375);h.setTitle("Current");
h=new f.gauge.Marker;h.setSize(0.4);h.setPosition(0.5);h.setTitle("Target");h.setTemplate('<T><T.R><s K="ratio">0.1</s></T.R><V VW="25" VH="50"><g><C><B F="{B F}" CR="5"/><B S="#11333333" ST="2" CR="5"/></C></g></V></T>');b.getIndicators().add(h);c.getDefaultAttributes().setSectionThickness(0.5);c.getDefaultAttributes().setSectionPosition(0.25)}if(d.sections.length>0){for(var h=0,j,g=0;g<d.sections.length;g++){j=d.sections[g];b=new f.gauge.ScaleSection;b.setFrom(h);b.setTo(j);c.getMainScale().getSections().add(b);
h=j}c.getMainScale().setMax(j)}};e.vert=function(c,a){e.linear(c,a)};e.horz=function(c,a){e.linear(c,a);c.getMainScale().setThickness(0.9)};e.chart=function(c,a){var b="";if(a!==void 0){var d=a[0];d!==void 0&&(b=d[0])}if(b!=void 0){b=b.toUpperCase();b=="GROUP"&&c.getBorder().setTemplate("<T/>")}b=c.getAxisY().getGrids();b.getMajor().setTickMark(f.TickMark.Cross);b.getMinor().setTickMark(f.TickMark.None);b=c.getAxisY2().getGrids();b.getMajor().setTickMark(f.TickMark.Cross);b.getMinor().setTickMark(f.TickMark.None);
b=c.getAxisX().getGrids();b.getMinor().setTickMark(f.TickMark.None);b.getMajor().setTickMark(f.TickMark.Outside);b.getMajor().setStyle(b.getMajor().getStyle()|f.AxisStyles.Centered);c.getAxisX().getLine().setWidth(2);c.getAllSeries().getBorder().setUseForLines(false);c.getAxisX().getGrids().getMajor().setTickMark(f.TickMark.Outside);c.getAllSeries().setMarkerShape(f.MarkerShape.Rect);c.setFont("8pt 'Roboto', sans-serif")};e.map=function(a){a.setShowAdditionalLayers(false)};e.heatmap=function(a){a=
a.getGradientStops();a.getItem(0).setColor("#329287");a.getItem(1).setColor("#75AE50")};e.equalizer=function(a){var e=new f.equalizer.EqualizerItem;e.setColor("#477EA5");e.setCount(2);a.getTopItems().add(e);e=new f.equalizer.EqualizerItem;e.setColor("#75AE50");e.setCount(1);a.getTopItems().add(e);a.setOffColor("#3350525D")};e.trend=function(a,e){a.getSecondaryValues().setAlphaForeground(0.3);a.getDelta().setVisible(false);a.getSecondaryValues().setSeparatorWidth(0.1);a.getIndicator().setStyle(f.gauge.IndicatorStyle.TriangleVertical);
var b="";if(e!==void 0){var d=e[0];d!==void 0&&(b=d[0])}if(b!=void 0){if(b.toUpperCase().indexOf("SINGLE")>=0){a.getDelta().setVisible(false);a.getPercentChange().setVisible(false);a.getIndicator().setVisible(false)}b.toUpperCase().indexOf("GROUP")>=0&&a.getBorder().setTemplate("<T/>")}};e.border=function(){}})();
