import "bootstrap/dist/css/bootstrap.min.css";
import '../Assets/css/material-dashboard.css.map';
import "./stats.css"

const Stats = () => {

    return(
    <div class="ambony">

        <div class="container">
            <div class="donut-chart-block block"> 
                <h2 class="titular">VENTE PAR MARQUE</h2>
                <div class="donut-chart">
                            <div id="porcion1" class="recorte">
                                <div class="quesito ios" data-rel="21"></div>
                            </div>
                            <div id="porcion2" class="recorte">
                                <div class="quesito mac" data-rel="39"></div>
                            </div>
                            <div id="porcion3" class="recorte">
                                <div class="quesito win" data-rel="31"></div>
                            </div>
                            <div id="porcionFin" class="recorte">
                                <div class="quesito linux" data-rel="9"></div>
                            </div>
                                <p class="center-date">JANVIER<br/>
                                    <span class="scnd-font-color">2024</span>
                                </p>        
                    </div>
                    <ul class="os-percentages horizontal-list">
                        <li>
                            <p class="ios os scnd-font-color">BMW</p>
                            <p class="os-percentage">21<sup>%</sup></p>
                        </li>
                        <li>
                            <p class="mac os scnd-font-color">Mercedes</p>
                            <p class="os-percentage">39<sup>%</sup></p>
                        </li>
                        <li>
                            <p class="linux os scnd-font-color">Hyundai</p>
                            <p class="os-percentage">9<sup>%</sup></p>
                        </li>
                        <li>
                            <p class="win os scnd-font-color">Porsche</p>
                            <p class="os-percentage">31<sup>%</sup></p>
                        </li>
                    </ul>
                </div>
                <div class="line-chart-block block">
                    <div class="line-chart">
                        <div class='grafico'>
                            <ul class='eje-y'>
                                <li data-ejeY='30'></li>
                                <li data-ejeY='20'></li>
                                <li data-ejeY='10'></li>
                                <li data-ejeY='0'></li>
                            </ul>
                            <ul class='eje-x'>
                                <li>Nov</li>
                                <li>Dec</li>
                                <li>Jan</li>
                            </ul>
                            <span data-valor='25'>
                            <span data-valor='8'>
                            <span data-valor='13'>
                            <span data-valor='5'>   
                            <span data-valor='23'>   
                            <span data-valor='12'>
                            <span data-valor='15'>
                            </span></span></span></span></span></span></span>
                        </div>
        
                    </div>
                    <ul class="time-lenght horizontal-list">
                        <li><a class="time-lenght-btn" href="#14">Week</a></li>
                        <li><a class="time-lenght-btn" href="#15">Month</a></li>
                        <li><a class="time-lenght-btn" href="#16">Year</a></li>
                    </ul>
                    <ul class="month-data clear">
                        <li>
                            <p>NOV<span class="scnd-font-color"> 2023</span></p>
                            <p><span class="entypo-plus increment"> </span>21<sup>%</sup></p>
                        </li>
                        <li>
                            <p>DEC<span class="scnd-font-color"> 2023</span></p>
                            <p><span class="entypo-plus increment"> </span>48<sup>%</sup></p>
                        </li>
                        <li>
                            <p>JAN<span class="scnd-font-color"> 2024</span></p>
                            <p><span class="entypo-plus increment"> </span>35<sup>%</sup></p>
                        </li>
                    </ul>
                </div>
        </div>
        
    </div>

    )
}

export default Stats