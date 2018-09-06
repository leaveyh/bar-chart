var togNum = 1;
var togNum1 = 1;
    d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vRfAbrZO7WbG1JAp37q8Gtb9cPoEJgyAtmHKU_aRE80RkoWZaEFwm3TFIAkubrD5hqXE9WDJFEb8vB8/pub?output=csv", function (data) {

                //chart 3 
                
                var svg3 = dimple.newSvg("#Chart3", "100%", 275);
        
        
                //whichChart tells program which chart is displayed for change purposes
                //1 = grad
                //2 = employment rates
                //3 = retention
                //4 = average earnings
                //5 = intercollege transfer
        
                var whichChart = 1;
                var chartCheck;
               
                           
        
                            gradData = dimple.filterData(data, "Measure", "graduationRate");
        
                            empData = dimple.filterData(data, "Measure", "employmentRate");
        
                            retData = dimple.filterData(data, "Measure", "retentionRate");
        
                            EarnData = dimple.filterData(data, "Measure", "medianEarning");
        
                            transData = dimple.filterData(data, "Measure", "meanEarning");
        
                            
        
                            gradData1 = dimple.filterData(gradData, "Program", ["A+ Certification", "CERT.CYBR", "A.A.S. Information Systems Security"]);

                            

                        
        
                            var wChart = new dimple.chart(svg3, gradData1);
                            wChart.setBounds("14%", "5%", "75%", "55%")
                            var edX = wChart.addCategoryAxis("x", ["College", "Program"]);
                            var eduY = wChart.addMeasureAxis("y", "Totals");
                           var edSeries = wChart.addSeries("Program", dimple.plot.bar);
                            eduY.title = "Graduation Rates";
                            edX.title = " ";
        
                            edX.addOrderRule("Montgomery College", "University of Baltimore", "Baltimore Community College");
        
                            var qLegend = wChart.addLegend("15%", "70%", "40%", "75%");
                            
        
                       //     edX.addOrderRule(["Less than high school graduate", "High school graduate (includes equivalency)", "Some college or associate's degree", "Bachelor's degree or higher"]);
                     // var edLegend = wChart.addLegend("0%", "83%", "50%", "70%", "right");
        
                            //edSeries.lineWeight = 0;
                            eduY.tickFormat = '.1%';
                            
                            wChart.draw();
        
d3.select("#btn3").on("change", function() {
  
    list();
	//buttonClick1();
   
 });                             
        
d3.select("#btn4").on("click", function() {
  
  
	buttonClick2();
   
 });
        
        
d3.select("#btn4").on("change", function() {
  
  
	buttonClick2();
   
 });
        
d3.select("#btn5").on("click", function() {
  
  
	buttonClick2();
   
 });
        
        
d3.select("#btn5").on("change", function() {
  
  
	buttonClick2();
   
 });
        
d3.select("#btn6").on("click", function() {
  
  
	buttonClick2();
   
 });
        
        
d3.select("#btn6").on("change", function() {
  
  
	buttonClick2();
   
 });
        
d3.select("#btn3").on("change", function() {
  
    list();
	//buttonClick1();
   
 });                             
        
d3.select("#btn41").on("click", function() {
  
  
	buttonClick2();
   
 });
        
        
d3.select("#btn41").on("change", function() {
  
  
	buttonClick2();
   
 });
        
d3.select("#btn51").on("click", function() {
  
  
	buttonClick2();
   
 });
        
        
d3.select("#btn51").on("change", function() {
  
  
	buttonClick2();
   
 });
        
d3.select("#btn61").on("click", function() {
  
  
	buttonClick2();
   
 });
        
        
d3.select("#btn61").on("change", function() {
  
  
	buttonClick2();
   
 });
        
d3.select("#change1").on("click", function() {
        whichChart = 1;
        wChart.data = gradData;
        eduY.title = "Graduation Rates";
        eduY.tickFormat = '.1%';
        buttonClick2();
        wChart.draw(1000);
    });
        
d3.select("#change2").on("click", function() {
        whichChart = 2;
        wChart.data = empData;
        eduY.title = "Employment Rates";
        eduY.tickFormat = '.1%';
        buttonClick2();
        wChart.draw(1000);
    });
        
d3.select("#change3").on("click", function() {
        whichChart = 3;
        wChart.data = retData;
        eduY.title = "Retention Rates";
        eduY.tickFormat = '.1%';
        buttonClick2();
        wChart.draw(1000);
    });
        
d3.select("#change4").on("click", function() {
       
            
        whichChart = 4;
        wChart.data = EarnData;
        eduY.tickFormat = '$,f';
        eduY.title = "Median Annual Earnings";
        buttonClick2();
        wChart.draw(1000);
        
        
       
    });
        
d3.select("#change5").on("click", function() {
        whichChart = 5;
        wChart.data = transData;
        eduY.title = "Mean Annual Earnings";
        eduY.tickFormat = '$,f';
        buttonClick2();
        wChart.draw(1000);
    });
        
                      
  function whichCheck(){
      if(whichChart == 1){
         var chartCheck = gradData;
          
      }
      
      if(whichChart == 2){
          var chartCheck = empData;
      }
      
      if(whichChart == 3){
          var chartCheck = retData;
      }
      
      if(whichChart == 4){
          var chartCheck = EarnData;
      }
      
      if(whichChart == 5){
          var chartCheck = transData;
      }
      
      return chartCheck;
      
      
  }
       
        
    //selectable college

  /*function buttonClick1(){
      
      var e3 = document.getElementById("btn3");
  var strUser3 = e3.options[e3.selectedIndex].value;
      
      var e4 = document.getElementById("btn4");
  var strUser4 = e4.options[e4.selectedIndex].value;
    
  
   var chartChange = dimple.filterData(whichCheck(), "College", strUser3);
    
    wChart.data = chartChange;
    
    if(strUser4 == "All Programs" && strUser3 == "All Colleges"){
        wChart.data = whichCheck();
    }
      
      if(strUser4 != "All Programs"){
        var chartChange1 = dimple.filterData(chartChange, "Program", strUser4);
        wChart.data = chartChange1;
    }
      
    if(strUser4 != "All Programs" && strUser3 == "All Colleges"){
        buttonClick2();
    }
      
       wChart.draw(1000);
      
  }*/
        
  function buttonClick2(){
      var X = document.getElementById("btn3");
      var x1 = X.options[X.selectedIndex].value;
      
      
      if(x1 == 1){
       var a1 = "btn4";
       var b1 = "btn5";
       var c1 = "btn6";
      }
      if(x1 == 2){
       var a1 = "btn41";
       var b1 = "btn51";
       var c1 = "btn61";
      }
      
      var e4 = document.getElementById(a1);
      var strUser4 = e4.options[e4.selectedIndex].value;
      
      //as above, so below
      var e5 = document.getElementById(b1);
      var strUser5 = e5.options[e5.selectedIndex].value;
      
      var e6 = document.getElementById(c1);
      var strUser6 = e6.options[e6.selectedIndex].value;
    
  
   var chartChange = dimple.filterData(whichCheck(), "Program", [strUser4, strUser5, strUser6]);
    
    wChart.data = chartChange;
    
    
      
        
     wChart.draw(1000);
     
  };
        
                           

                           
window.drawAll = function(){
                 
                                wChart.draw(0, true);
                                
                            }; 
        
         window.onresize = function () {
                      
                        drawAll();
                    };
        
        
        
        
        
    });

function collapse1() {
        document.getElementById("Collapse2").style.display="inline";
        document.getElementById("Collapse3").style.display="none";
        document.getElementById("Collapse4").style.display="none";
        document.getElementById("Collapse5").style.display="none";
        document.getElementById("Collapse6").style.display="none";
        
        document.getElementById("Title1").style.display="inline";
        document.getElementById("Title2").style.display="none";
        document.getElementById("Title3").style.display="none";
        document.getElementById("Title4").style.display="none";
        document.getElementById("Title5").style.display="none";
    
    
        drawAll();
        
    }

function collapse2() {
        document.getElementById("Collapse2").style.display="none";
        document.getElementById("Collapse3").style.display="inline";
        document.getElementById("Collapse4").style.display="none";
        document.getElementById("Collapse5").style.display="none";
        document.getElementById("Collapse6").style.display="none";
    
        document.getElementById("Title1").style.display="none";
        document.getElementById("Title2").style.display="inline";
        document.getElementById("Title3").style.display="none";
        document.getElementById("Title4").style.display="none";
        document.getElementById("Title5").style.display="none";
        
        
        drawAll();
        
    }

function collapse3() {
        document.getElementById("Collapse2").style.display="none";
        document.getElementById("Collapse3").style.display="none";
        document.getElementById("Collapse4").style.display="inline";
        document.getElementById("Collapse5").style.display="none";
        document.getElementById("Collapse6").style.display="none";
    
        document.getElementById("Title1").style.display="none";
        document.getElementById("Title2").style.display="none";
        document.getElementById("Title3").style.display="inline";
        document.getElementById("Title4").style.display="none";
        document.getElementById("Title5").style.display="none";
        
        
        drawAll();
        
    }

function collapse4() {
        document.getElementById("Collapse2").style.display="none";
        document.getElementById("Collapse3").style.display="none";
        document.getElementById("Collapse4").style.display="none";
        document.getElementById("Collapse5").style.display="inline";
        document.getElementById("Collapse6").style.display="none";
    
        document.getElementById("Title1").style.display="none";
        document.getElementById("Title2").style.display="none";
        document.getElementById("Title3").style.display="none";
        document.getElementById("Title4").style.display="inline";
        document.getElementById("Title5").style.display="none";
        
        
        drawAll();
        
    }

function collapse5() {
        document.getElementById("Collapse2").style.display="none";
        document.getElementById("Collapse3").style.display="none";
        document.getElementById("Collapse4").style.display="none";
        document.getElementById("Collapse5").style.display="none";
        document.getElementById("Collapse6").style.display="inline";
    
        document.getElementById("Title1").style.display="none";
        document.getElementById("Title2").style.display="none";
        document.getElementById("Title3").style.display="none";
        document.getElementById("Title4").style.display="none";
        document.getElementById("Title5").style.display="inline";
        
        
        drawAll();
        
    }

function color1(){
    document.getElementById("change1").style.background="#c4c4c4";
   
    
    document.getElementById("change2").style.background="linear-gradient(to top, #cbcbcb, white)";
    
    
    document.getElementById("change3").style.background="linear-gradient(to top, #cbcbcb, white)";
   
    
    document.getElementById("change4").style.background="linear-gradient(to top, #cbcbcb, white)";
    
    
    document.getElementById("change5").style.background="linear-gradient(to top, #cbcbcb, white)";
    
    
    
}

function color2(){
    document.getElementById("change1").style.background="linear-gradient(to top, #cbcbcb, white)";
   
    
    document.getElementById("change2").style.background="#c4c4c4";
    
    
    document.getElementById("change3").style.background="linear-gradient(to top, #cbcbcb, white)";
    
    
    document.getElementById("change4").style.background="linear-gradient(to top, #cbcbcb, white)";
    
    
    document.getElementById("change5").style.background="linear-gradient(to top, #cbcbcb, white)";
    
    
}

function color3(){
    document.getElementById("change1").style.background="linear-gradient(to top, #cbcbcb, white)";
   
    
    document.getElementById("change2").style.background="linear-gradient(to top, #cbcbcb, white)";
    
    
    document.getElementById("change3").style.background="#c4c4c4";
    
    
    document.getElementById("change4").style.background="linear-gradient(to top, #cbcbcb, white)";
    
    
    document.getElementById("change5").style.background="linear-gradient(to top, #cbcbcb, white)";
    
    
}

function color4(){
    document.getElementById("change1").style.background="linear-gradient(to top, #cbcbcb, white)";
   
    
    document.getElementById("change2").style.background="linear-gradient(to top, #cbcbcb, white)";
    
    
    document.getElementById("change3").style.background="linear-gradient(to top, #cbcbcb, white)";
    
    
    document.getElementById("change4").style.background="#c4c4c4";
    
    
    document.getElementById("change5").style.background="linear-gradient(to top, #cbcbcb, white)";
    
    
}

function color5(){
    document.getElementById("change1").style.background="linear-gradient(to top, #cbcbcb, white)";
   
    
    document.getElementById("change2").style.background="linear-gradient(to top, #cbcbcb, white)";
    
    
    document.getElementById("change3").style.background="linear-gradient(to top, #cbcbcb, white)";
    
    
    document.getElementById("change4").style.background="linear-gradient(to top, #cbcbcb, white)";
    
    
    document.getElementById("change5").style.background="#c4c4c4";
    
    
}

function list(){
    var X = document.getElementById("btn3");
   var x1 = X.options[X.selectedIndex].value;
    
    if(x1 == 1){
        list1();
    } else {
        list2();
    }
    
    
}

function list1(){
    var X1 = document.getElementById("btn4");
    var X2 = document.getElementById("btn5");
    var X3 = document.getElementById("btn6");
    var X4 = document.getElementById("btn41");
    var X5 = document.getElementById("btn51");
    var X6 = document.getElementById("btn61");
   
    
    X1.style.display = "inline";
    X2.style.display = "inline";
    X3.style.display = "inline";
    X4.style.display = "none";
    X5.style.display = "none";
    X6.style.display = "none";
    
    
    X1.selectedIndex = 0;
    X2.selectedIndex = 0;
    X3.selectedIndex = 0;
    X4.selectedIndex = 0;
    X5.selectedIndex = 0;
    X6.selectedIndex = 0;
    
}

function list2(){
    var X1 = document.getElementById("btn4");
    var X2 = document.getElementById("btn5");
    var X3 = document.getElementById("btn6");
    var X4 = document.getElementById("btn41");
    var X5 = document.getElementById("btn51");
    var X6 = document.getElementById("btn61");
   
    
    X1.style.display = "none";
    X2.style.display = "none";
    X3.style.display = "none";
    X4.style.display = "inline";
    X5.style.display = "inline";
    X6.style.display = "inline";
    
    
    X1.selectedIndex = 0;
    X2.selectedIndex = 0;
    X3.selectedIndex = 0;
    X4.selectedIndex = 0;
    X5.selectedIndex = 0;
    X6.selectedIndex = 0;
}

