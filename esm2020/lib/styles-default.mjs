export default `
p{
    font-family:"Poppins", Verdana, sans-serif;
    color: #000;
    margin:0;
    padding:0;
} 
input{
    font-family:"Poppins", Verdana, sans-serif;
    color: #000;
    margin:0;
    padding:0;
} 
label{
    font-family:"Poppins", Verdana, sans-serif;
    color: #000;
    margin:0;
    padding:0;
    font-size: .9rem;
    font-weight: 500;
    margin-left:15px;
}
.bm-date-input{
    display:flex;
    flex:1;height:40px;
    border-radius: 9999px;
    padding: 3px 0 3px 20px; 
    border: 1px solid rgb(195, 195, 195)
}
.bm-date-input-wrapper{
    position:relative; 
    width: 100%; 
    display:flex;
    flex-direction:row; 
    align-items: center;
}
.bm-date-input-wrapper input[readonly] { 
    cursor: default !important;
    background:  rgb(245,245,245);
}
.bm-toggle-button{
    position:absolute; 
    right:5px; 
    width:30px; 
    height:30px;
    display:flex;
    align-items:center; 
    justify-content:center; 
    background-color:rgb(0, 153, 235);
    border: 1px solid rgb(0, 153, 235);
    border-radius: 9999px;
    transition:.5s
}
.bm-toggle-button:hover{
    background-color: rgb(0, 131, 202);
    cursor:pointer;
    color:fff;
    border: 1px solid rgb(0, 131, 202)
}
.bm-table{
    width:100%; 
    background-color:#f5f5f5;
    overflow: hidden;
    padding:16px; 
    display:flex;
    flex-direction: column; 
    border-radius: 8px; 
    box-shadow: 0 0 0.125rem 0 rgba(0,0,0,0.08), 0 0.125rem 0.75rem 0 rgba(0,0,0,0.24);
    box-sizing:border-box;
}
.bm-tr{
    display:flex;
    flex:1; 
    justify-content:space-between; 
    align-items:center;
    flex-direction: row;
}
.bm-th{
    display:flex; 
    flex:1; 
    justify-content:center; 
    align-items:center;
    flex-direction:row;
}
.bm-td{
    display:flex; 
    flex:1;
    justify-content:center; 
    align-items: center; 
}
.bm-td-empty{
    display:flex; 
    flex:1;
    justify-content:center; 
    align-items: center; 
}
.bm-td-empty-month{
    display:flex; 
    flex:1;
    justify-content:center; 
    align-items: center; 
}
.bm-td-empty .bm-td-inner-empty{
    height:30px;
    width:30px;
    margin:2px;
}
.bm-td-inner{
    height:30px;
    width:30px;
    margin:2px;
    display:flex; 
    justify-content:center; 
    align-items: center; 
    border-radius:9999px;
    transition: .4s;
    border: 1px solid #f5f5f5;
}
.bm-td-inner:hover{
    background-color: rgb(0, 131, 202);
    cursor:pointer;
    border: 1px solid rgb(0, 131, 202)
}
.bm-td-selected-day{
    background-color: rgb(0, 153, 235);
    cursor:pointer;
    border: 1px solid rgb(0, 153, 235)
}
.bm-td-inner:hover p{color:#fff}
.bm-td-selected-day p{color:#fff}
.bm-th p{
    font-size: .9rem;
    font-weight: 500;
}
.bm-td-inner p{
    font-size: .8rem;
    font-weight: 300;
}
.bm-daylabels-wrapper{margin-bottom: 20px}
.bm-year-month-title {
    display:flex; 
    flex: 5;
    justify-content: center; 
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px
}
.bm-year-month-title p.bm-month-title{
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: -8px
}
.bm-td-current-day{border: 1px solid rgb(0, 202, 101)}
.bm-td-before-day{ 
    pointer-events:none;
    background: repeating-linear-gradient(-55deg,rgb(222, 222, 222), rgb(222, 222, 222) 2px,rgba(0,0,0,0) 2px, rgba(0,0,0,0) 4px);
    border: 1px solid rgb(222, 222, 222)}
.bm-arrow {
    border: solid #000;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
}
.bm-td-inner:hover .bm-arrow{
    border-color:white;
    border-width: 0 3px 3px 0;
}
.bm-arrow-right {transform: rotate(-45deg);}
.bm-arrow-left {transform: rotate(135deg);}
.bm-weekend {color: #ff0000}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVzLWRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ibS1kYXRlcGlja2VyLWxpdGUvc3JjL2xpYi9zdHlsZXMtZGVmYXVsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTBLZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYFxucHtcbiAgICBmb250LWZhbWlseTpcIlBvcHBpbnNcIiwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBtYXJnaW46MDtcbiAgICBwYWRkaW5nOjA7XG59IFxuaW5wdXR7XG4gICAgZm9udC1mYW1pbHk6XCJQb3BwaW5zXCIsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xufSBcbmxhYmVse1xuICAgIGZvbnQtZmFtaWx5OlwiUG9wcGluc1wiLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6MDtcbiAgICBmb250LXNpemU6IC45cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLWxlZnQ6MTVweDtcbn1cbi5ibS1kYXRlLWlucHV0e1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4OjE7aGVpZ2h0OjQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgIHBhZGRpbmc6IDNweCAwIDNweCAyMHB4OyBcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTk1LCAxOTUsIDE5NSlcbn1cbi5ibS1kYXRlLWlucHV0LXdyYXBwZXJ7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7IFxuICAgIHdpZHRoOiAxMDAlOyBcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246cm93OyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJtLWRhdGUtaW5wdXQtd3JhcHBlciBpbnB1dFtyZWFkb25seV0geyBcbiAgICBjdXJzb3I6IGRlZmF1bHQgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiAgcmdiKDI0NSwyNDUsMjQ1KTtcbn1cbi5ibS10b2dnbGUtYnV0dG9ue1xuICAgIHBvc2l0aW9uOmFic29sdXRlOyBcbiAgICByaWdodDo1cHg7IFxuICAgIHdpZHRoOjMwcHg7IFxuICAgIGhlaWdodDozMHB4O1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7IFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7IFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDAsIDE1MywgMjM1KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMTUzLCAyMzUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgICB0cmFuc2l0aW9uOi41c1xufVxuLmJtLXRvZ2dsZS1idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEzMSwgMjAyKTtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICBjb2xvcjpmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDEzMSwgMjAyKVxufVxuLmJtLXRhYmxle1xuICAgIHdpZHRoOjEwMCU7IFxuICAgIGJhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6MTZweDsgXG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDsgXG4gICAgYm94LXNoYWRvdzogMCAwIDAuMTI1cmVtIDAgcmdiYSgwLDAsMCwwLjA4KSwgMCAwLjEyNXJlbSAwLjc1cmVtIDAgcmdiYSgwLDAsMCwwLjI0KTtcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XG59XG4uYm0tdHJ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXg6MTsgXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47IFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmJtLXRoe1xuICAgIGRpc3BsYXk6ZmxleDsgXG4gICAgZmxleDoxOyBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246cm93O1xufVxuLmJtLXRke1xuICAgIGRpc3BsYXk6ZmxleDsgXG4gICAgZmxleDoxO1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxufVxuLmJtLXRkLWVtcHR5e1xuICAgIGRpc3BsYXk6ZmxleDsgXG4gICAgZmxleDoxO1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxufVxuLmJtLXRkLWVtcHR5LW1vbnRoe1xuICAgIGRpc3BsYXk6ZmxleDsgXG4gICAgZmxleDoxO1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxufVxuLmJtLXRkLWVtcHR5IC5ibS10ZC1pbm5lci1lbXB0eXtcbiAgICBoZWlnaHQ6MzBweDtcbiAgICB3aWR0aDozMHB4O1xuICAgIG1hcmdpbjoycHg7XG59XG4uYm0tdGQtaW5uZXJ7XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgd2lkdGg6MzBweDtcbiAgICBtYXJnaW46MnB4O1xuICAgIGRpc3BsYXk6ZmxleDsgXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gICAgYm9yZGVyLXJhZGl1czo5OTk5cHg7XG4gICAgdHJhbnNpdGlvbjogLjRzO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNWY1ZjU7XG59XG4uYm0tdGQtaW5uZXI6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEzMSwgMjAyKTtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMTMxLCAyMDIpXG59XG4uYm0tdGQtc2VsZWN0ZWQtZGF5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNTMsIDIzNSk7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDE1MywgMjM1KVxufVxuLmJtLXRkLWlubmVyOmhvdmVyIHB7Y29sb3I6I2ZmZn1cbi5ibS10ZC1zZWxlY3RlZC1kYXkgcHtjb2xvcjojZmZmfVxuLmJtLXRoIHB7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuLmJtLXRkLWlubmVyIHB7XG4gICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuLmJtLWRheWxhYmVscy13cmFwcGVye21hcmdpbi1ib3R0b206IDIwcHh9XG4uYm0teWVhci1tb250aC10aXRsZSB7XG4gICAgZGlzcGxheTpmbGV4OyBcbiAgICBmbGV4OiA1O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweFxufVxuLmJtLXllYXItbW9udGgtdGl0bGUgcC5ibS1tb250aC10aXRsZXtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi10b3A6IC04cHhcbn1cbi5ibS10ZC1jdXJyZW50LWRheXtib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMjAyLCAxMDEpfVxuLmJtLXRkLWJlZm9yZS1kYXl7IFxuICAgIHBvaW50ZXItZXZlbnRzOm5vbmU7XG4gICAgYmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgtNTVkZWcscmdiKDIyMiwgMjIyLCAyMjIpLCByZ2IoMjIyLCAyMjIsIDIyMikgMnB4LHJnYmEoMCwwLDAsMCkgMnB4LCByZ2JhKDAsMCwwLDApIDRweCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMiwgMjIyLCAyMjIpfVxuLmJtLWFycm93IHtcbiAgICBib3JkZXI6IHNvbGlkICMwMDA7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogM3B4O1xufVxuLmJtLXRkLWlubmVyOmhvdmVyIC5ibS1hcnJvd3tcbiAgICBib3JkZXItY29sb3I6d2hpdGU7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcbn1cbi5ibS1hcnJvdy1yaWdodCB7dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTt9XG4uYm0tYXJyb3ctbGVmdCB7dHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTt9XG4uYm0td2Vla2VuZCB7Y29sb3I6ICNmZjAwMDB9XG5gO1xuIl19