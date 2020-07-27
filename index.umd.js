!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).PenTool=e()}(this,(function(){"use strict";const t={PEN_AUX:"penAux",CIRCLE:"circle",LINE:"line",PATH:"path"},e={STRAIGHT:"straight",MIRRORED:"mirrored",DISJOINTED:"disjointed"},i={LEFT:"handleA",RIGHT:"handleB",MAIN:"main"},n={NEW:"new"},s={ADD:"add",NORMAL:"normal",MOVE:"move",CLOSE:"close",DEFAULT:"default"},o={normal:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAABIdJREFUSA3tVWsspFcY/uaW0dgiOqQimQ3iPmkQtyIShlWEbK0uUlGXdkkbTRBtGlIlQmls2B/qkobBH2JIMFHpBE0YGWwRxqWWBl1WMmu2SnXMfDN9zrQz2c5mN4bd/upJTs533vNevue9UnK5/Obk5GTb8fGxB/VfrIGBgZH4+Hh9dXW1cmxsbHR7e/vGq7TLEIvFEq1WK9RoNFqFQvHn7u6uVUpKypK3t3cPdjuDwdC+zB9gEmVWVlbHg4ODzOTk5J8KCgokGxsbzqWlpfe6urruz8/Pf63X621emlGCsKmpaWtiYuKH7OzsJ+vr66kwwENs77W1tSngbrqhoeHB1NSUCPTrVzXMhsv0REloaGje3Nzcj0D0paen5/chISGfwgCXnECc2tjY+N7w8PANqVQ67+bmVu3i4iK/lHGSNAQhEV5YWCiDW9UymayLGMNmG5VubW3dGhkZkWZlZT3u7+9fNdItPU0KiaCfn19NcXFxIpTfnpmZEep0Oo1EIvk5KCjoY0dHRzFYxENDQ8PIZIGlhoz8hqQxXoh7z8/POUggtqur60N3d3cFPOA3Pj4+CLS2hA8njYxmPI3eKH+R04iQQZiVSmVIUVGRd0lJyUB4ePhtQltZWfm8rKys2sPDoxjXChaLRavVavKjHGyLS+ZfCE9PT/knJyfWNjY2poTw9fX9zsvLS3l0dOQKAxSTydShbo0GCcmixTRmKZHi8/kzQPIIKwkuIwio5eXlPGyera3tQ3InCOH2Sxs0uBRGiS4K56/T09OjdXV17+/s7Mz29PQc19bWCtLS0jYDAwO/ITwE4T8uNYaDkC+8DC4FGpIE1kQqLCwsr7y8/C6bzdaiob+RmZkpi4mJeRc/85i8wyANl7IODg7eRl0OtbS0KJaWlj4kbxdZbCcnJ1VzczOfw+Hcn52dlUKoIjg4+AucZD+zuFwuBbTXampqRCqVyprH47HQhZoWFxdZKKvWZwTMCEx0ko/Quirs7Oz+qKqqyq+vr5+Hgm4g5pvxUug4Cfv7++90dnZyfXx8Xj88PGShZCgkFhcyn0GGZy5jfv87eKCCmbW2tnZndXX1g97e3rdQg09iY2PlUPwViv4XxLa5vb092d7e/jW0PnZlZSUF1xr0ZWRkUGgGNMqpPyoqKt3cyNN3U+ARIxoP35IN4VQY/kQkEkX7+/sLYYTC5LBOTExk9vX1UUgmkw60Qgpu1W1ubuppmlabHp7zYUJo/g7EtkA1jPiGCQQC5tnZGaO1tZV4wsCK2FM5OTkUXEpHRkbuC4XCxoCAgLvmeszvzzWIRi1DUw9OSEhgdXd3U3t7eybZ9PR0Cs1Bh4GtKSwsHI+Ojs6Fhx6ZGCz9AIrr+fn556hBvYODg2kje/UYU/q4uDgayB/AYK6luk0xNBP8zdnZWYlafBN0BmqPwliiMD10GMxq1KkkIiLiDlCpzOQuf8VMFCUlJWlQMgZUKH66o6MDibx26/JaXyAJt15D7JbReXS5ubm/4wc6QTN0oxeIXe0JoykOyTOKgRxzNU3/S79CD/wF1bAnj93p/FEAAAAASUVORK5CYII=",add:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAABUlJREFUSA29VnkspVcU/96ijxrrvFKVUPveILYiGoxJkUqrOihRW6cyTRpLtYpUiaU0JswfxpImtkSIJbFEZayJJZYpYqfMoMOQZxljGct7+ruv/V4673UmGNOb3Nx3zz3n/L7fueec+6j+/v6POzs7C3d2dvSp/2PU1tY2uru7n6ampvJaWlqaFxYWrr9OXEZNTU3TycmJ6/Hx8cnExMSzpaUlaW9v71EjI6NyzCIGg3FymR/AJM6kpaV36urqmF5eXr9HREQ0zczMqMfGxt4pLS29PzQ09PPp6an8pYEShrm5ufMdHR33goODt6enp30AwMXd3iksLJxAuPnZ2dl/dHd3l0Cu+arAbITslDixs7MLGxwc7AKjHw0MDH6ztbX9BgAcsoKxT05OzmcNDQ3XW1tbh3R0dFK1tLT6LwROkoYwJMbDw8MJCOthb29vKQHDZNNO5+fnP21sbGwNCgraqK6unqTl511FDomhubl5enR0tCec3+jr63MVCATHTU1Ns9bW1rdUVFRqoFJTX1/fgEw2PS8QrS9MGnpDwnt0dCSFBGJra2s/0tPTm0AEzNvb2+vAVoHoYeUjoxn/Zk/bn2WlGTKIMo/Hs42KijKKiYmpdXBwuEFk4+Pj3yckJKTq6+tHY5vEYrH4h4eH5EOlMM9dMs8x3Nvb09jd3ZWVl5cXJYSJicmvhoaGvM3NTW0AUEwmU4C6pQGJ6FyDSWcpsdLQ0OgDk8cYHyFkhAE1NjYWhslVUFB4RPaEIcJ+YUBhSAFKfFFY/+zp6WnOzMwMWFxcHCgvL9/JyMgw9fX1nbOysvqF6BCG/4SUvg4iPvMQhhRsSBLIEit7e/uwxMTE22w2+wQN/WpgYGDvtWvXPsHHbJBzAPIRUtbq6ur7qMv6/Pz8idHR0XBydpbBVlNT28rLy9OQkpK6PzAw0AqjJBsbmx+wkikxOBwOBbZX0tPTS7a2tmS5XC4LXSh3ZGSEhbIqkDAQEzDRSb5E60pSVFTcT0lJ+SorK2sIDsrAWENMl0LH8VhZWfmwuLiYY2xsLLe2tsZCyVBILA5svoMNV9xGfP/35UEKZdbU1NTNycnJLyorK99DDW67ubn1w/FPKPoHuNu8oqIiL2VlZRm0PnZycjKF0Ar9+fv7U2gGfJRTtbOzsx98kYRj4RqeiQOKLh6HfBzeJRPGPgD+uqSkxMXCwsIVIBReDllPT09mVVUVhWQS+UErpBBWwdzc3Cmfzz8kB21tbb37+/tXAawDv8JeTRuIGNICeoWyAlg14H7tTU1NmQcHB4yCggISCaEK7p4KCQmhEFK+k5PTiqura46lpeVtcohX5uH29vZbeOIUAPhccxAxpIHoFT20GU3dxsPDg1VWVkYtLy/TR5Sfnx+F5iDo6uo6joyMbHdxcQmF48cihZf8EJaF+DlYaCLlreCIhWwUgeFJotDmqNnZWYG6uvqDtLS0W2DmAfsnsFGlJ/bCyKF01PEP4h0y0UyEZfcihk/gkIdafJsYo/YoPEsUXg8BHuZD1GmTo6PjTbDaQqK9W1FR0Y9u9CaOpchEXTJJQq2vrz+EvXCYmZnxcM8f/CcgHG3jTbyHLvN5XFwcG+2MwlsoCAgImA0PD0/Efx3yVAmHqqrqFs6fampqHtOyjY0NZXSjN3R1dUVhlpGR2ZeTk+PROhIrwnMFdzeGziMIDQ19ig8ohkwYFgllMQFJGtTzHvQlCEkIaFuw3MXT9G18fHwkGGXjbwXpQq88XghIPKMcWrCQeWnjpYAXRSElg0Qj9ScQ9/FaAJWUlILRKLi4FgnAvwBe6YatAEV1yQAAAABJRU5ErkJggg==",close:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAABbRJREFUSA29VnssnWcY/845ONWhtNWgmjFpKUG7IGadRqcdm5IwI5lL0rXjD8kydMXQiJpayxAtSuaeSKWn7NDWiLjXrXOndQtd3OpWzlYO5zvffu+pT/SwLKzbm3znPd/zPs/ze5/3eX7P+1FNTU0u1dXVd5aWlgyp/2Pcv39f6ODgwFy7dm32Ecbz588/+S9xOQKBoFQikdiLxWJJf3//yujo6B43N7fO48ePF+C5w+FwJG9zA1ziTFFRUVRSUsI9f/78b/7+/qXPnj07fPny5aTc3NwnbW1t1xmG2ffWQMmRJiUlDSOP5T4+Pot9fX0eADjQ0tKSlJGR0ePo6EjHx8cP1dfX50Cu96+B1wFH4Ez35s2bI4iqG/9ViWPM/O7u7uC7d+82u7u7v7py5cpURUVF6eDgoPWugVlA4qCzszPU2dlZ3NDQkA8wJTwKrOPh4WHX0tLSSl9f37mioqJ+Vr7TWeYQhSGzMzMzux4cHPzZyMiIO+hiJ5VK18rKygbMzc0DdHV1BVASCIXCXxChGTbDhZ10p4CyomGN4IBZXV1VROXyDAwMJo8ePdpbXFxsXltbKwCA+rqeBDpkh4qs3U5mWYRwJgtxdnbWMjAw0DgoKKj41KlTnxNHvb29wWFhYbHHjh0LwmsEl8uVApBslNiK8exokGNhWIvl5eUjIpFIRU1NrZWVGRsb/2xiYjIzNzf3HpFtAtxVhG8cKfLUDLJPvnjx4lNELXPY09PzVUdHh6a6uvo4AeTxePTa2hoPf3cFyB4p8UUh2nFU6MO4uDgvdJzW/Pz8xdjYWBNQYsjKyupHoqOgoEAAd51DWYQkh3hUiEMbG5uL4eHh8XC8hoZ+wMvL67GdnZ0rNjNL1jGkaIO86elpS1KxaWlpvTiBr18v/fOvgra29vytW7eOKCkptTU3N1fBJBLRhGEmz5bB5/MprKvExMTkIK8qmpqavLq6up8Ayj1x4kTaFgM5ARfGfugwkRoaGq+io6Mv4Thb0cbyEPG7croUeqzjxMSEY3Z2thJyrTYzM8OrrKykTE1N+aDOd7A5JG8j//6a8ZBCmYc+eunp06e+hYWF5uDgy7NnzzajQqMQxTBym5qZmemM4lE2MjJSiIqKonDLyPx5eHhQY2NjNCglwPF/IQ+y+X0DcLMQbcwNV1XAvXv33scxcfbv30/l5OS84+TkxEVbowYGBjbU0QopPT09prGxkQZ/C9vb2/2xwUhlZWU9bGgJuY7DRoZYg20BySIiVkNUwtTU1A/BRe7KygonPT2dyGW2Wlpa1IULF6iqqioaTWISl3gSwICl+Q26Ex8XOYXToFxdXWmAP8bGPmJBt53RqBvs7e0liYmJjIWFBQNHG09AQACDSqZdXFzEAHyITWgjrz/cvn2bNjQ0FBcUFLSDv01Ye2JraztP9OGvaVsgIoQDXVzEYnBwA4QAWlpaMmQDiIZOSUkZRs4vrutzUDwifX19enx8vBH2ZutyncXFxQeohWmkRJqcnGwtIz5ZlBsiHR2dWXQVLcjRzbiUt7c3UZHiFlkNDQ19gJ1fAjfniRBcvIjqVUEkPbALh7yLyDFPAPzLGzduVOAuPeTn53f1jdZGlMiA4iJ29Sv4xYSEhFAAoMAzKagwGBER4XP69Gk3Fozog5uHwEnq5MmTq3htJzJ2QG8BuRSheIie+raARNna2jrA09OzD5XKdHV1/QEaFKBILECTItYZO6PzTKKBUPj+4UP2ASsnMyLcRxrEwYMHKei93Ly25T8+L86hfT3ChXtuy6KcoKamRoQ7lMbRtgJE9gmC+fDCwoLwzJkzM+AwjRxayZnt/jUrK+tqXl4eqdJVzB04lZby8vI29OYF5I7BV2E98f63PNwNNKEGrrhvwcM9uG0oVVVVCtSRoE/Xgo8fv3VA4jAhIUEZRfL93r17j9A0/efU1FQsOtDvbAB/ATu47sdIopyeAAAAAElFTkSuQmCC",move:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAstJREFUSA3Nld9rklEYx+cMBX/QTaIIKjkYbqibiOAfINJNNxt6E8KIjIVEUBRBRHTRv2Ajhxde7c4LyboJvIguYhqDyS4G2RxqTRvOWkaSp+/zsgOv+r7h/BEdODzvec7zfT7vec9zzjvDGHN1Op3gzL9qAF7LZrOHjUbjGZ5np84FJOL3+38GAoGjg4ODlxhfmioUgDWfz9cGhBmNxl/5fP49fP6pQZH8utfr/UFA6kqlkiUSid1Wq3VvKlAAb3g8nlMO5DYcDpdrtdoW5vUTBSPhzaWlpe8cJLZ2u/10b2/vLWKcE4Mi2S2n0/lNDBI/q9Vqlk6nP7Tb7bWJQAGMLS4utsQQqedYLLZfr9dfIF49FhgJbjscjhMpSL/P7XYfl0qlN9BcHhkK8Z35+flmf3K5sV6v/53L5ejoXB0JCuHdubm5YzkA9ysUCmYwGJjL5WLBYJAVi8UvuBLvnxd6AYLZbrdLZ7CnRaPRLs5nU6PRnOh0OupNQA9RRPtWq3XXZrN9hOATF+HFtXi+gv4acXTMpBsCH0DcwKxw8Mmur6934/H4c2nFoBc5LpbL5e2VlRVGlsaDUWceTD60WCx1DAVgJBJhGxsbW7KCvgkOW1hYEPRk/wqF4JHZbD4iIL3h5ubmq76cskOCVavVbdxUjM4r5SBLY/LT/IAYzscmk+kzFUIymXw3ECDj4DBYoVUqFQFIljdJKCaf4N78mkqldpBbIZO/xw2NsGfLy8s8N5MC0koHPi8UTzOZzE4oFFL2ZJUZIF5LSWivVCqVACJYoVAQVkiWxtTp84r2lKoYH50xI/rQf3rErtJek3TYTvGkI965G4TCCnH/jrbCcxMhAFTYQ9oj3obew1GApCHoWRUKTCmgZJWOChRDaaVUQPQeZKl6Jw7jL0orpaqlPSWgqCoHDz0XjWs5dKi7dFwY1wOqRV8ly33/hf0D+qqSk3G9oaMAAAAASUVORK5CYII="};class a{constructor(e={}){this.penType=t.PEN_AUX,this.stroke="#ff56b1",this.fill="#006cff",this.lineWidth=1,this.penType=t.PEN_AUX,this.stroke=e.stroke||"#ff56b1",this.fill=e.fill||"#006cff",this.lineWidth=e.lineWidth||1}}class h extends a{constructor(e={}){super(e),this.radius=3,this.stroke="#006cff",this.fill="#fff",this.x=e.x,this.y=e.y,this.radius=e.radius||3,this.keyPointIndex=e.keyPointIndex,this.handleName=e.handleName,this.fill=e.fill||"#fff",this.stroke=e.stroke||"#006cff",this.type=t.CIRCLE}}class l extends a{constructor(e={}){super(e),this.x1=e.x1,this.y1=e.y1,this.x2=e.x2,this.y2=e.y2,this.type=t.LINE}}class r{constructor({type:t,point:i,pointType:n,relationPoints:s,keyPointIndex:o,controller1:a,controller2:h,auxLine1:l,auxLine2:r,handleName:y}={}){this.pointType=e.STRAIGHT,this.type=t,this.point=i,this.pointType=n||e.STRAIGHT,this.relationPoints=s||[],this.keyPointIndex=o,this.controller1=a,this.controller2=h,this.auxLine1=l,this.auxLine2=r,this.handleName=y}}return class{constructor(t,e,i){this.penModeOn=!1,this.keyPointData=[],this.keyPointDataCache=[],this.closeState=!1,this.cacheCloseState=!1,this.penMouseDown=!1,this.options={circle:new h,line:new l,pathColor:"#000",pathFillColor:"#ebebeb",isFillPath:!1},this.objects=[],this.isEdit=!1;try{t?(this.canvas=document.getElementById(t),this.canvasCtx=this.canvas.getContext("2d"),this.options=Object.assign({circle:new h,line:new l,pathColor:"#000",pathFillColor:"#ebebeb"},e),this.closeState=!!e&&e.closeState,this.keyPointData=i||[],this.keyPointData.length>0&&(this.realPathStr=this._generatePathStr(this.keyPointData),this.drawPath({closeState:e.closeState})),this._mouseDown(),this._mouseMove(),this._mouseUp(),this._keydown(),this._mouseDblclick()):console.error("PenTool must based a canvas, please confirm that the canvasId is passed.")}catch(t){console.error(t.message)}}enablePen(){this.penModeOn=!0,this.setCursor(s.NORMAL)}exitPenMode(){if(null!=this.currentKeyPointIndex)this.currentKeyPointIndex=null,this.isEdit=!0,this.setCursor(s.NORMAL),this.refreshEditPath();else{if(this.penModeOn=!1,this.pathRealObject){let e=this.objects.filter(e=>e.penType===t.PEN_AUX);this.removeObjects(...e)}this.setCursor(s.DEFAULT),this.currentKeyPointIndex=null,this.isEdit=!1}this.refreshRender()}setCursor(t){t===s.DEFAULT?this.canvas.style.cursor="default":this.canvas.style.cursor=`url(${o[t]}), default`}_mouseDown(){this.canvas.addEventListener("mousedown",t=>{this.penModeOn&&this._penMouseDown(t)})}_mouseMove(){this.canvas.addEventListener("mousemove",t=>{this.penModeOn&&(this.penMouseDown&&this.setCursor(s.MOVE),this._penMouseMove(t))})}_mouseUp(){this.canvas.addEventListener("mouseup",t=>{this.penModeOn&&(this.setCursor(s.NORMAL),this._penMouseUp(t))})}_mouseDblclick(){this.canvas.addEventListener("dblclick",e=>{if(this.penModeOn){let i=this._getMouseOverTarget(e);i&&i.penType===t.PEN_AUX&&null==i.handleName&&(this.changeKeyPointType(i),this.refreshRender())}else{let t={x:e.offsetX,y:e.offsetY},i=new Path2D(this.realPathStr);this.canvasCtx.isPointInPath(i,t.x,t.y)&&(this.setCursor(s.NORMAL),this.generateEditablePath())}})}_keydown(){this.canvas.setAttribute("tabIndex","0"),this.canvas.style.userSelect="none",this.canvas.addEventListener("keydown",t=>{this.penModeOn&&27===t.keyCode&&this.exitPenMode()})}_penMouseDown(i){let s,o=this._getMouseOverTarget(i),a=i.offsetX,l=i.offsetY;if(this.penMouseDown=!0,this.mousedownTarget=o,this.keyPointDataCache=null,this.penMouseMoveFix={x:a,y:l},this._matchObjectsByProrerty("penType",t.PEN_AUX,t=>{t.fill="#fff"}),null!==o&&o.penType===t.PEN_AUX)return s=o.keyPointIndex,o.fill=o.stroke,this.keyPointData.length>1&&this.currentKeyPointIndex===this.keyPointData.length-1&&0===s&&(this.closeState=!0),(this.closeState||s!==this.keyPointData.length-1)&&(this.isEdit=!0),this.currentKeyPointIndex=s,this.setMousedownOrigin(),void this.refreshEditPath();if(0===this.keyPointData.length||this.currentKeyPointIndex===this.keyPointData.length-1&&!this.closeState){let t;if(0===this.keyPointData.length)t=new r({type:"M",point:{x:a,y:l},pointType:e.STRAIGHT,relationPoints:[a,l],keyPointIndex:this.keyPointData.length});else{let i=this.keyPointData[this.keyPointData.length-1],n=i.point.x,s=i.point.y;i.pointType!==e.STRAIGHT&&(n=i.controller2.x,s=i.controller2.y),t=new r({type:"C",point:{x:a,y:l},pointType:e.STRAIGHT,relationPoints:[n,s,a,l,a,l],keyPointIndex:this.keyPointData.length})}let i=new h({x:a,y:l,keyPointIndex:t.keyPointIndex,fill:this.options.circle.fill,stroke:this.options.circle.stroke});this.addCanvasObjects(i),this.keyPointData.push(t),this.currentKeyPointIndex=this.keyPointData.length-1,this.refreshEditPath(),this.keyPointState=n.NEW}else null==this.currentKeyPointIndex?this.exitPenMode():this.keyPointData.length>0&&(this.closeState||this.currentKeyPointIndex!==this.keyPointData.length-1)&&(this.currentKeyPointIndex=null,this.isEdit=!0);this.refreshRender()}_penMouseMove(o){let a=o.offsetX,h=o.offsetY,l=this._getMouseOverTarget(o);if(this.isEdit){if(null!=this.mousedownTarget&&this.mousedownTarget.penType===t.PEN_AUX&&this.penMouseDown){let t=this.mousedownTarget;t.x=a,t.y=h,t.handleName===i.LEFT?(o.altKey?this.changeKeyPointType(t,e.DISJOINTED):this.changeKeyPointType(t),this.changeKeyPointPos(a,h,i.LEFT)):t.handleName===i.RIGHT?(o.altKey?this.changeKeyPointType(t,e.DISJOINTED):this.changeKeyPointType(t),this.changeKeyPointPos(a,h,i.RIGHT)):this.changeKeyPointPos(a,h,i.MAIN)}}else if(this.keyPointState===n.NEW)(Math.abs(this.penMouseMoveFix.x-a)>2||Math.abs(this.penMouseMoveFix.y-h)>2)&&this.changeKeyPointPos(a,h,i.RIGHT);else if(null!=l&&l.penType===t.PEN_AUX&&(0!==l.keyPointIndex||this.closeState||0===l.keyPointIndex&&this.currentKeyPointIndex!==this.keyPointData.length-1))this.penMouseDown||this.setCursor(s.MOVE);else if(this.setCursor(s.NORMAL),this.currentKeyPointIndex===this.keyPointData.length-1&&!this.closeState){let i,n,o,y=this.keyPointData[this.currentKeyPointIndex];null==this.keyPointDataCache?(this.keyPointDataCache=JSON.parse(JSON.stringify(this.keyPointData)),this.keyPointDataCache.push(new r)):this.cacheCloseState=!1,"M"===this.keyPointData[this.currentKeyPointIndex].type?(n=y.relationPoints[0],o=y.relationPoints[1]):(n=y.relationPoints[4],o=y.relationPoints[5]),y.pointType!==e.STRAIGHT&&(n=y.controller2.x,o=y.controller2.y),i=new r({type:"C",point:{x:a,y:h},pointType:e.STRAIGHT,relationPoints:[n,o,a,h,a,h],keyPointIndex:this.keyPointDataCache.length-1}),this.keyPointDataCache[this.keyPointDataCache.length-1]=i,this.keyPointData.length>1&&null!==l&&l.penType===t.PEN_AUX&&0===l.keyPointIndex?(this.cacheCloseState=!0,this.setCursor(s.CLOSE)):this.setCursor(s.ADD),this.refreshEditPath(!0)}this.refreshRender()}_penMouseUp(e){this.penMouseDown=!1,this.currentKeyPointIndex===this.keyPointData.length-1&&!this.closeState&&this.penMouseMoveFix&&e.offsetX===this.penMouseMoveFix.x&&e.offsetY===this.penMouseMoveFix.y&&(this.isEdit=!1),this._matchObjectsByProrerty("penType",t.PEN_AUX,t=>{t.keyPointIndex===this.currentKeyPointIndex&&null==t.handleName&&(t.fill=t.stroke)}),this.keyPointState=null,this.penMouseMoveFix=null,this.penMouseDownOrigin=null,this.refreshRender()}changeKeyPointPos(t,n,s=i.MAIN){let o=this.currentKeyPointIndex,a=this.keyPointData[o],h=a.point;if(s!==i.LEFT&&s!==i.RIGHT||a.pointType!=e.STRAIGHT||this.createPathCurveAux(a),s===i.MAIN){let i,s,l,r,y,P;if(this.penMouseDownOrigin&&(this.penMouseDownOrigin.x&&(y=this.penMouseDownOrigin.x-t,P=this.penMouseDownOrigin.y-n),this.penMouseDownOrigin.x1&&(i=this.penMouseDownOrigin.x1-y,l=this.penMouseDownOrigin.y1-P),this.penMouseDownOrigin.x2&&(s=this.penMouseDownOrigin.x2-y,r=this.penMouseDownOrigin.y2-P),this.updatePenPathControll(a,{x:t,y:n,x1:i,y1:l,x2:s,y2:r})),h.x=t,h.y=n,"M"===a.type){if(a.relationPoints[0]=t,a.relationPoints[1]=n,o+1<=this.keyPointData.length-1){let i=this.keyPointData[o+1];a.pointType!=e.STRAIGHT?(i.relationPoints[0]=s,i.relationPoints[1]=r):(i.relationPoints[0]=t,i.relationPoints[1]=n)}a.pointType!=e.STRAIGHT&&(a.relationPoints[2]=i,a.relationPoints[3]=l),a.point={x:t,y:n}}else{if(a.pointType!=e.STRAIGHT?(a.relationPoints[2]=i,a.relationPoints[3]=l):(a.relationPoints[2]=t,a.relationPoints[3]=n),a.relationPoints[4]=t,a.relationPoints[5]=n,o+1<=this.keyPointData.length-1){let i=this.keyPointData[o+1];a.pointType!=e.STRAIGHT?(i.relationPoints[0]=s,i.relationPoints[1]=r):(i.relationPoints[0]=t,i.relationPoints[1]=n)}a.point={x:t,y:n}}}else if(s===i.LEFT||s===i.RIGHT){let h,r,y,P;a.pointType==e.STRAIGHT&&(a.pointType=e.MIRRORED);let c=a.relationPoints[4],p=a.relationPoints[5];if("M"==a.type&&(c=a.relationPoints[0],p=a.relationPoints[1]),a.pointType==e.MIRRORED){if(s===i.RIGHT?(h=2*c-t,r=2*p-n,y=t,P=n):(y=2*c-t,P=2*p-n,h=t,r=n),this.updatePenPathControll(a,{x:c,y:p,x1:h,y1:r,x2:y,y2:P}),"M"===a.type){if(o+1<=this.keyPointData.length-1){let t=this.keyPointData[o+1];t.relationPoints[0]=y,t.relationPoints[1]=P}a.pointType!=e.STRAIGHT&&(a.relationPoints[2]=h,a.relationPoints[3]=r)}else if(a.relationPoints[2]=h,a.relationPoints[3]=r,o+1<=this.keyPointData.length-1){var l=this.keyPointData[o+1];l.relationPoints[0]=y,l.relationPoints[1]=P}}else if(a.pointType==e.DISJOINTED)if(s===i.RIGHT){if(y=t,P=n,this.updatePenPathControll(a,{x:c,y:p,x2:y,y2:P},i.RIGHT),"M"===a.type){if(o+1<=this.keyPointData.length-1){let t=this.keyPointData[o+1];t.relationPoints[0]=y,t.relationPoints[1]=P}}else if(o+1<=this.keyPointData.length-1){let t=this.keyPointData[o+1];t.relationPoints[0]=y,t.relationPoints[1]=P}}else h=t,r=n,this.updatePenPathControll(a,{x:c,y:p,x1:h,y1:r},i.LEFT),"M"===a.type?"straight"!=a.pointType&&(a.relationPoints[2]=h,a.relationPoints[3]=r):(a.relationPoints[2]=h,a.relationPoints[3]=r)}this.refreshEditPath()}createPathCurveAux(t){let e=t.point,n=e.x,s=e.y,o=new h({x:n,y:s,handleName:i.LEFT,keyPointIndex:t.keyPointIndex,fill:this.options.circle.fill,stroke:this.options.circle.stroke,lineWidth:this.options.circle.lineWidth}),a=new h({x:n,y:s,handleName:i.RIGHT,keyPointIndex:t.keyPointIndex,fill:this.options.circle.fill,stroke:this.options.circle.stroke,lineWidth:this.options.circle.lineWidth}),r=new l({x1:n,y1:s,x2:n,y2:s,stroke:this.options.line.stroke,lineWidth:this.options.line.lineWidth}),y=new l({x1:n,y1:s,x2:n,y2:s,stroke:this.options.line.stroke,lineWidth:this.options.line.lineWidth});t.controller1=o,t.controller2=a,t.auxLine1=r,t.auxLine2=y,this.addCanvasObjects(o,a,r,y)}updatePenPathControll(t,e,n){let s=e.x,o=e.y,a=e.x1,h=e.y1,l=e.x2,r=e.y2,{controller1:y,controller2:P,auxLine1:c,auxLine2:p}=Object.assign({},t);null!=n&&n!==i.LEFT||(null!=y&&(y.x=a,y.y=h),null!=c&&(c.x1=a,c.y1=h,c.x2=s,c.y2=o)),null!=n&&n!==i.RIGHT||(null!=P&&(P.x=l,P.y=r),null!=p&&(p.x1=l,p.y1=r,p.x2=s,p.y2=o))}setMousedownOrigin(){let t=this.keyPointData[this.currentKeyPointIndex],e=t.controller1,i=t.controller2,n=t.point,s={};null!=e&&(s.x1=e.x,s.y1=e.y),null!=e&&(s.x2=i.x,s.y2=i.y),null!=n&&(s.x=n.x,s.y=n.y),this.penMouseDownOrigin=s}refreshEditPath(e=!1){let i=this.keyPointData,n=this.closeState;if(0===i.length)return;e&&(i=this.keyPointDataCache,n=this.cacheCloseState);let s=this._generatePathStr(i),o=null,a=s;if(n&&(o=this.options.pathFillColor,a+=" Z"),null==this.realPathStr||this.realPathStr!==s||!e){this.realPathStr=a;let e=this.objects.filter(e=>e.type===t.PATH);this.removeObjects(...e),this.pathRealObject={pathStr:this.realPathStr,type:t.PATH,fill:o||"#ebebeb",closeState:n,index:-1/0},this.addCanvasObjects(this.pathRealObject)}}_generatePathStr(t){let i="";if(t.forEach(t=>{let e="";if("M"===t.type){let i=`M ${t.relationPoints[0]} ${t.relationPoints[1]} `;e+=i}else"C"===t.type&&(e+="C ",t.relationPoints.forEach(t=>{e+=t+" "}));i+=e}),this.closeState){let n=t[0],s=t[t.length-1];i+="C ",s.pointType!==e.STRAIGHT?i+=`${s.controller2.x} ${s.controller2.y} `:i+=`${s.relationPoints[4]} ${s.relationPoints[5]} `,n.pointType!==e.STRAIGHT?i+=`${n.relationPoints[2]} ${n.relationPoints[3]} `:i+=`${n.relationPoints[0]} ${n.relationPoints[1]} `,i+=`${n.relationPoints[0]} ${n.relationPoints[1]} `}return i}refreshRender(){this.canvasCtx.clearRect(0,0,this.canvas.width,this.canvas.height),this._matchObjectsByProrerty("penType",t.PEN_AUX,e=>{e.type===t.CIRCLE&&this._bringToFront(e)}),this.drawObjects(this.objects||[])}drawObjects(e){e.forEach(e=>{switch(e.type){case t.CIRCLE:this.drawCircle(e);break;case t.LINE:this.drawLine(e);break;case t.PATH:this.drawPath(e)}})}drawCircle(t){this.canvasCtx.fillStyle=t.fill,this.canvasCtx.strokeStyle=t.stroke,this.canvasCtx.beginPath(),this.canvasCtx.arc(t.x,t.y,t.radius,0,2*Math.PI),this.canvasCtx.fill(),this.canvasCtx.stroke()}drawPath(t={}){this.canvasCtx.fillStyle=this.options.pathFillColor,this.canvasCtx.strokeStyle=this.options.pathColor,this.canvasCtx.beginPath();let e=new Path2D(this.realPathStr);this.canvasCtx.stroke(e);let i=new RegExp("\\w*[zZ]{1}\\s*","g").test(this.realPathStr);(t.closeState||i)&&(!this.keyPointDataCache&&this.options.isFillPath||this.keyPointDataCache&&this.keyPointData.length!==this.keyPointDataCache.length)&&this.canvasCtx.fill(e)}drawLine(t){this.canvasCtx.fillStyle=t.fill,this.canvasCtx.strokeStyle=t.stroke,this.canvasCtx.beginPath(),this.canvasCtx.moveTo(t.x1,t.y1),this.canvasCtx.lineTo(t.x2,t.y2),this.canvasCtx.stroke()}addCanvasObjects(...t){return t.forEach(t=>{null==t.index&&(t.index=this.objects.length),this.objects.push(t)}),t}removeObjects(...t){t.forEach(t=>{this.removeSingleObject(t)})}removeSingleObject(t){for(let e=this.objects.length-1;e>=0;e--){if(this.objects[e]===t){this.objects.splice(e,1);break}}}_getMouseOverTarget(t){let e={x:t.offsetX,y:t.offsetY},i=null;this.objects.sort((t,e)=>t-e);for(let t=this.objects.length-1;t>=0;t--){const n=this.objects[t];if(this._containsPoint(e,n)){i=n;break}}return i}_containsPoint(e,i){if(!i.type)return!1;if(i.type===t.CIRCLE){let t=i.radius,n=i.x,s=i.y;return e.x<=n+t&&e.x>=n-t&&e.y<=s+t&&e.y>=s-t}if(i.type===t.LINE){return(i.y1-i.y2)/(i.x1-i.x2)===(e.y-i.y1)/(e.x-i.x1)&&(e.x>=i.x1&&e.x<=i.x2&&e.y>=i.y1&&e.y<=i.y2||e.x>=i.x2&&e.x<=i.x1&&e.y>=i.y2&&e.y<=i.y1)}if(i.type===t.PATH){let t=new Path2D(i.pathStr);return this.canvasCtx.isPointInStroke(t,e.x,e.y)}return!1}_matchObjectsByProrerty(t,e,i){this.objects.forEach(n=>{n[t]===e&&i(n)})}_bringToFront(t){t.index=1/0,this.objects.sort((t,e)=>t.index-e.index),this.objects.forEach((t,e)=>{t.index=e})}changeKeyPointType(t,i){let n=t.keyPointIndex,s=this.keyPointData[n],o=Object.assign({},e);if(null==i||s.pointType===e.STRAIGHT&&i in o||i===e.STRAIGHT&&s.pointType in o){if(null==s.controller1){let o,a,h,l,r,y,P,c,p,x,d,u,A,f;if(this.createPathCurveAux(s),s.pointType=i||e.MIRRORED,o=0===t.keyPointIndex?this.keyPointData[this.keyPointData.length-1]:this.keyPointData[t.keyPointIndex-1],a=t.keyPointIndex===this.keyPointData.length-1?this.keyPointData[0]:this.keyPointData[t.keyPointIndex+1],h=o.point.x,l=o.point.y,r=a.point.x,y=a.point.y,P=s.point.x,c=s.point.y,p=Math.atan2(y-l,r-h),x=Math.sqrt(Math.pow(r-h,2)+Math.pow(y-l,2))/2,d=Math.round(P-x*Math.cos(p)),A=Math.round(c-x*Math.sin(p)),u=Math.round(P+x*Math.cos(p)),f=Math.round(c+x*Math.sin(p)),this.updatePenPathControll(s,{x:P,y:c,x1:d,y1:A,x2:u,y2:f}),n+1<=this.keyPointData.length-1){let t=this.keyPointData[n+1];t.relationPoints[0]=u,t.relationPoints[1]=f}s.relationPoints[2]=d,s.relationPoints[3]=A}else{this.removeObjects(s.controller1,s.controller2,s.auxLine1,s.auxLine2),delete s.controller1,delete s.controller2,delete s.auxLine1,delete s.auxLine2,s.pointType=e.STRAIGHT;let t=s.point.x,i=s.point.y;if("M"===s.pointType?s.relationPoints.length>2&&s.relationPoints.splice(-2,2):(s.relationPoints[2]=t,s.relationPoints[3]=i),n+1<=this.keyPointData.length-1){let e=this.keyPointData[n+1];e.relationPoints[0]=t,e.relationPoints[1]=i}}this.refreshEditPath()}else s.pointType=i}generateEditablePath(){this.penModeOn=!0,this.objects=[],this.generateAuxPointLine(this.keyPointData),this.refreshEditPath(),this.refreshRender()}generateAuxPointLine(t=[]){0!==t.length&&t.forEach((t,i)=>{let n=t.point.x,s=t.point.y,o=new h({x:n,y:s,keyPointIndex:t.keyPointIndex,fill:this.options.circle.fill,stroke:this.options.circle.stroke});this.addCanvasObjects(o),t.pointType!==e.STRAIGHT&&this.addCanvasObjects(t.auxLine1,t.auxLine2,t.controller1,t.controller2)})}generateKeyPointDataByPath(t){let i,n=/[\s|\-]([^A-Za-z\-\s])+/g,s=[],o=["H","V","S","Q","T","A"],a=t.match(/[A-Za-z]/g)||[];for(let t=0;t<a.length;t++){const e=a[t];if(o.includes(e.toUpperCase()))return void alert("Path contains unSupport commands")}return i=t.match(/[A-Za-z]( *[^A-Za-z] *)+(?=[A-Za-z]* *)/g)||[],i.forEach((t,i)=>{const o=t.substring(0,1),a=["c","l"];let h=function(t,e,i){if(t.length<e)return t;let n=[];for(let i=0;i<t.length;i+=e)n.push(t.slice(i,i+e));return n}(function(t=[]){let e=[];return t.forEach(t=>{e.push(Math.round(Number(t)))}),e}(t.replace(/[A-Za-z]/," ").match(n)),2);if(0===s.length){let t=h[0][0],i=h[0][1],n=new r({type:"M",point:{x:t,y:i},pointType:e.STRAIGHT,relationPoints:[t,i],keyPointIndex:s.length});s.push(n)}else if(a.includes(o)&&(h=function(t,e){let i=[];return t.forEach((t,n)=>{0===n?i.push([t[0]+e.x,t[1]+e.y]):i.push([t[0]+i[n-1][0],t[1]+i[n-1][1]])}),i}(h,s[s.length-1].point)),"C"===o.toUpperCase()){let t,i=s[s.length-1],n=i.point.x,o=i.point.y,a={x:h[0][0],y:h[0][1]},l={x:h[1][0],y:h[1][1]},y=h[1][0],P=h[1][1];i.controller2&&(n=i.controller2.x,o=i.controller2.y),t=new r({type:"C",point:{x:y,y:P},pointType:e.STRAIGHT,relationPoints:[n,o,l.x,l.y,y,P],keyPointIndex:s.length,controller1:a,controller2:l}),s.push(t)}else"L"===o.toUpperCase()&&h.forEach((t,i)=>{let n,o=s[s.length-1],a=o.point.x,h=o.point.y,l=t[0],y=t[1];o.pointType!==e.STRAIGHT&&(a=o.controller2.x,h=o.controller2.y),n=new r({type:"C",point:{x:l,y:y},pointType:e.STRAIGHT,relationPoints:[a,h,l,y,l,y],keyPointIndex:s.length}),s.push(n)})}),(t.indexOf("z")>0||t.indexOf("Z")>0)&&(this.closeState=!0),s}}}));
