# Bookmaker Datepicker Lite for Angular 
A sweet, stylish and fast datepicker for Angular. Developed for developers who want full control over the stylesheet. Can be used within a formgroup or as a standalone input. 

![alt text](https://github.com/steffodimfelt/bm-datepicker-lite/blob/main/bookmaker.png?raw=true)

# FormBuilder 
## Is it possible to connect Bookmaker to my FormBuilder?
Yes it is. Use `formGroupInput` to connect to your formgroup and `formControlNameInput` to set a control name. 
```html
<bm-datepicker-lite
    [formGroupInput]="generatedFormGroup"
    formControlNameInput="password"
>
</bm-datepicker-lite>
```

## Can I use FormBuilder Validators?
Of course. Put you validation requirements in you component or service. Bookmaker will handle it via the `formControlNameInput` you gave it. 

## What about error handling messages from FormBuilder Validators?
You can add the error messages below the Bookmaker and reference to the input field via the  FormControllName.
```html
  <p *ngIf="generatedFormGroup.get('password')?.errors?.['required']"> This field is required</p>
```

## What if I want a different format of the input field?
Well, no, and yes. Right now the format is YYYY-MM-DD. 
BUT ONLY in the GUI. The response back to the Formgroup is in raw format:
```javscript
Sat Nov 26 2022 00:00:00 GMT+0100 
```

## How do I get back the response from Bookmaker?
You can use `calendarOutput` to hook up to a response function. The response value is a raw formated date. 
```html
<bm-datepicker-lite (calendarOutput)="calendarToOutput($event)"></bm-datepicker-lite>
```

# Names, labels and texts
## Hey, I want to change the label! Can I do that?
Use the `label` option to change the text. 
```html
<bm-datepicker-lite label="Date from:"></bm-datepicker-lite>
```

## What about the placeholder, can I change that too?
Use the `placeholder` option to change the text. 
```html
<bm-datepicker-lite placeholder="YYYY-MM-DD"></bm-datepicker-lite>
```

## How I change the name of the Weekdays?
Bookmaker comes with a default array of the names in english. Use it to change it to a language of your choice. Connect it to `weekdays` option.

In the HTML:
```html
<bm-datepicker-lite [weekdays]="weekdays"></bm-datepicker-lite>
```
In the component:
```javscript
weekdays = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
```

## How I change the name of the Months name?
Bookmaker comes with a default array of the names in english. Use it to change it to a language of your choice. Connect it to `months` option.

In the HTML:
```html
<bm-datepicker-lite [months]="months"></bm-datepicker-lite>
```
In the component:
```javscript
  months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];
```

# Styles and icon
## I want a different calendar button icon. How do I change that (even if it is quite fancy)?
Bookmaker have a default calendar icon. If you want to use you own, you can add it inside the Bookmaker. 
```html
<bm-datepicker-lite><ng-icon name="akarCalendar" size="16px" color="white"></ng-icon></bm-datepicker-lite>
```

## Can I change that stylesheet?
You can change everything in Bookmaker. That's the beauty. It is a list of styles, but hey, you are a developer, aren't you? You can use the stylesheet to change parts or everything, it's up to you. Treat it as an usual stylesheet in SCSS. This is an overview of all elements, but you can concentrate it and put togther elements as you wish.  

Use `styleSheet`option to do the changes:

In the HTML: 
```html
<bm-datepicker-lite [styleSheet]="styles"><bm-datepicker-lite>
```
In the component: 
```javascript
 styles = `
p, input, label{
  font-family:"Poppins", Verdana, sans-serif;
  color: #000;
  margin:0;
  padding:0;
}
label{
  font-size: .9rem;
  font-weight: 500;
  margin-left:15px
}
.bm-date-input{
  display:flex;
  flex:1;
  height:40px;
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
.bm-toggle-button{
  position:absolute; 
  right:5px; 
  width:30px; 
  height:30px;
  display:flex;
  align-items:center; 
  justify-content:center; 
  background-color:rgb(0, 131, 202);
  border: 1px solid rgb(0, 131, 202);
  border-radius: 9999px;
  transition:.5s
}
.bm-toggle-button:hover{
  background-color: rgb(0, 153, 235);
  cursor:pointer;
  color:fff;
  border: 1px solid rgb(0, 153, 235)
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
.bm-td, .bm-td-empty, .bm-td-empty-month{
  display:flex; 
  flex:1;
  justify-content:center; 
  align-items: center; 
}
.bm-td-inner,
.bm-td-empty .bm-td-inner-empty{
  height:30px;
  width:30px;
  margin:2px;
}
.bm-td-inner{
  display:flex; 
  justify-content:center; 
  align-items: center; 
  border-radius:9999px;
  transition: .4s;
  border: 1px solid #f5f5f5;
}
.bm-td-inner:hover, .bm-td-selected-day{
  background-color: rgb(0, 131, 202);
  cursor:pointer;
  border: 1px solid rgb(0, 131, 202)
}
.bm-td-inner:hover p, .bm-td-selected-day p{color:#fff}
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
.bm-weekend {color: rgb(209, 49, 0)}
  `;
```

## Other questions?
### Can I use it in a commercial web site?
Yes, you can. 

### Can I change the week to start on a Sunday? 
No, not yet. This is a lite-version. :-)

### Can I change the animations? 
No. This is a lite-version. :-)

### Can I change placement of the datepicker and input field? 
Sorry. Lite-version, you know. :-)

# Author
Steffo Dimfelt
[steffo.dimfelt@gmail.com](mailto:steffo.dimfelt@gmail.com)

# Version list
- 1.0.4: Fix year format bug. Adjust text to Readme
- 1.0.3: Adjust text to Readme
- 1.0.2: Adjust text to Readme
- 1.0.1: Adjust text to Readme
- 1.0.0: Initial setup