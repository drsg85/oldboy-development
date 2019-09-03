import Chart from '../../../node_modules/chart.js/dist/Chart.min.js';

class InvestChart {
    constructor() {
        this.ctx = document.querySelector("#targeting-compare-graph");
        if(this.ctx) {
            this.addEvents();
        }
    }
    addEvents() {
        const investChart = new Chart(this.ctx, {
            type: 'line',
            data: {
                labels: ['1 месяц', '1 год', '5 лет'],
                datasets: [{
                    label: 'Доля в размере 10%',
                    data: [40000, 480000, 2400000],
                    lineTension: 0,
                    fill: false,
                    borderWidth: 1,
                    borderColor: "#d6a354",
                    pointBackgroundColor: "#d6a354",
                    pointBorderWidth: 1,
                    pointStyle: 'rect'
                },
                {
                    label: 'Доля в размере 20%',
                    data: [80000, 960000, 4800000],
                    lineTension: 0,
                    fill: false,
                    borderWidth: 1,
                    borderColor: "#d6a354",
                    pointBackgroundColor: "#d6a354",
                    pointBorderWidth: 1,
                    pointStyle: 'rect'
                },
                {
                    label: 'Доля в размере 30%',
                    data: [120000, 1440000, 7200000],
                    lineTension: 0,
                    fill: false,
                    borderWidth: 1,
                    borderColor: "#d6a354",
                    pointBackgroundColor: "#d6a354",
                    pointBorderWidth: 1,
                    pointStyle: 'rect'
                },
                {
                    label: 'Доля в размере 40%',
                    data: [160000, 1920000, 9600000],
                    lineTension: 0,
                    fill: false,
                    borderWidth: 1,
                    borderColor: "#d6a354",
                    pointBackgroundColor: "#d6a354",
                    pointBorderWidth: 1,
                    pointStyle: 'rect'
                },
                {
                    label: 'Доля в размере 50%',
                    data: [200000, 2400000, 12000000],
                    lineTension: 0,
                    fill: false,
                    borderWidth: 1,
                    borderColor: "#d6a354",
                    pointBackgroundColor: "#d6a354",
                    pointBorderWidth: 1,
                    pointStyle: 'rect'
                },
            ],
            },
            
            options: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        fontColor: '#131313',
                        fontSize: 14,
                        usePointStyle: true
                    },
                    
                    onHover: (event, legendItem) => {
                        if(legendItem) {
                          event.srcElement.style.cursor = 'pointer';
                        }
                    },

                    onClick: function(e, legendItem) {
                        var index = legendItem.datasetIndex;
                        var ci = this.chart;
                        var alreadyHidden = (ci.getDatasetMeta(index).hidden === null) ? false : ci.getDatasetMeta(index).hidden;
                        var anyOthersAlreadyHidden = false;
                        var allOthersHidden = true;
              
                        // figure out the current state of the labels
                        ci.data.datasets.forEach(function(e, i) {
                          var meta = ci.getDatasetMeta(i);
                          
                          if (i !== index) {
                            if (meta.hidden) {
                              anyOthersAlreadyHidden = true;
                            } else {
                              allOthersHidden = false;
                            }
                          }
                        });
                        
                        // if the label we clicked is already hidden 
                        // then we now want to unhide (with any others already unhidden)
                        if (alreadyHidden) {
                          ci.getDatasetMeta(index).hidden = null;
                        } else { 
                          // otherwise, lets figure out how to toggle visibility based upon the current state
                          ci.data.datasets.forEach(function(e, i) {
                            var meta = ci.getDatasetMeta(i);
              
                            if (i !== index) {
                              // handles logic when we click on visible hidden label and there is currently at least
                              // one other label that is visible and at least one other label already hidden
                              // (we want to keep those already hidden still hidden)
                              if (anyOthersAlreadyHidden && !allOthersHidden) {
                                meta.borderWidth = 'green';
                              } else {
                                // toggle visibility
                                meta.hidden = meta.hidden === null ? !meta.hidden : null;
                                meta.borderWidth = meta.borderWidth === 'red' ? !meta.borderWidth : 'green';
                              }
                            } else {
                              meta.hidden = null;
                            }
                          });
                        }
              
                        ci.update();
                      },
                },
                maintainAspectRatio: false,
                onHover: (event) => {
                  event.srcElement.style.cursor = 'default';
                },

                tooltips: {
                  // Disable the on-canvas tooltip
                    enabled: false,
                    intersect: false,
                    custom: function(tooltipModel) {
                        // Tooltip Element
                        var tooltipEl = document.getElementById('chartjs-tooltip');
                        // Create element on first render
                        if (!tooltipEl) {
                            tooltipEl = document.createElement('div');
                            tooltipEl.id = 'chartjs-tooltip';
                            tooltipEl.innerHTML = '<table></table>';
                            tooltipEl.style.display = 'block';
                            tooltipEl.style.visibility = 'visible';
                            tooltipEl.style.opacity = 1;
                            tooltipEl.style.background = 'rgba(255, 255, 255, 1)';
                            tooltipEl.style.border = '1px solid #d6a354';
                            document.body.appendChild(tooltipEl);
                        }

                        // Hide if no tooltip
                        if (tooltipModel.opacity === 0) {
                            tooltipEl.style.opacity = 0;
                            return;
                        }

                        // Set caret Position
                        if (tooltipModel.yAlign) {
                            tooltipEl.classList.add(tooltipModel.yAlign);
                        } else {
                            tooltipEl.classList.add('no-transform');
                        }

                        function getBody(bodyItem) {
                            return bodyItem.lines;
                        }

                        // Set Text
                        if (tooltipModel.body) {
                          var titleLines = tooltipModel.title || [];
                          var bodyLines = tooltipModel.body.map(getBody);
                          const fixedBodyLines = bodyLines.map((el) => {
                            const ArOfStr = el[0].split(' ');
                            const num = (ArOfStr[ArOfStr.length - 1]);
                            const regexp = /\d{1,3}(?=(\d{3})+(?!\d))/g;
                            const rNum = num.replace(regexp, '$& ');
                            ArOfStr[ArOfStr.length - 1] = rNum;
                            const result = ArOfStr.join(' ');
                            return result;
                          });
                            var innerHtml = '<thead>';

                            titleLines.forEach(function(title) {
                                innerHtml += '<tr><th>' + title + '</th></tr>';
                            });
                            innerHtml += '</thead><tbody>';

                            fixedBodyLines.forEach(function(body, i) {
                                var colors = tooltipModel.labelColors[i];
                                var style = 'background:' + colors.backgroundColor;
                                style += '; border-color:' + colors.borderColor;
                                style += '; border-width: 2px';
                                var span = '<span style="' + style + '"></span>';
                                innerHtml += '<tr><td>' + span + body + '</td></tr>';
                            });
                            innerHtml += '</tbody>';

                            var tableRoot = tooltipEl.querySelector('table');
                            tableRoot.innerHTML = innerHtml;
                        }

                        // `this` will be the overall tooltip
                        var position = this._chart.canvas.getBoundingClientRect();
                        // Display, position, and set styles for font
                        tooltipEl.style.opacity = 1;
                        tooltipEl.style.position = 'absolute';
                        if(tooltipModel.caretX > 700) {
                          tooltipEl.style.left = tooltipModel.caretX + position.left - 200 + 'px';
                        }
                        else {
                          tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                        }
                        tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                        tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
                        tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
                        tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
                        tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
                        tooltipEl.style.pointerEvents = 'none';
                    },
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        callback: (label, index, labels) => {
                          if(label/1000 >= 1000) {
                            return label/1000000+' млн.'
                          }
                          else if (label/1000 < 1000 && label/1000 >= 100) {
                            return label/1000+' тыс.';
                          }
                          else if (label/1000 < 100) {
                            return label+' тыс.'
                          }
                        },
                        scaleLabel: {
                          display: true,
                          labelString: '1млн. = 1000'
                        }
                      }
                    }
                  ]
                }
            }
        })
    }
}

export default InvestChart;