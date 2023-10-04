# Bookmaker Datepicker Lite for Angular 
A sweet, stylish and fast datepicker for Angular. Developed for developers who want full control over the stylesheet and patterns. Can be used within a formgroup or as a standalone input with a standalone callback output. 

## Notice
This application requires Angular version 15.1.0 or newer to work correctly.

<img src="https://github.com/steffodimfelt/bm-datepicker-lite/blob/main/bookmaker.png"  width="350px" alt="Bookmaker Datepicker Lite">

# Installation 
`npm i bm-datepicker-lite`

Import module in `app.module.ts`:
```javascript
import { BmDatepickerLiteModule } from 'bm-datepicker-lite';
  imports: [
    BmDatepickerLiteModule,
    ...
  ],
```

Usage:
```html
<bm-datepicker-lite></bm-datepicker-lite>
```


# Formbuilder 
## Is it possible to connect Bookmaker Lite to my Formbuilder?
Yes it is. Use `formGroupInput` to connect to your formgroup and `formControlNameInput` to set a control name. 
```html
<form [formGroup]="generatedFormGroup" (submit)="submitForm()">
    <bm-datepicker-lite
        [formGroupInput]="generatedFormGroup"
        formControlNameInput="dateFrom">
    </bm-datepicker-lite>
</form>
```

If you need to pre-define a date, you can do it in the component. 
```javascript
    this.generatedFormGroup = this.formBuilder.group({
      dateFrom: ["24-02-2023"],
    })
```

Note! If you don't need Formbuilder at all, then remove both `formGroupInput` and `formControlNameInput`, otherwise you will get an error. 
You will then need the `calendarOutput` to fetch the callback event:
```html
<bm-datepicker (calendarOutput)="calendarToOutput($event)"></bm-datepicker>
```

Note! If you don't need Formbuilder at all, then remove both `formGroupInput` and `formControlNameInput`, otherwise you will get an error. 

## Can I use Formbuilder Validators?
Of course. Put you validation requirements in you component or service. Bookmaker Lite will handle it via the `formControlNameInput` you gave it. 

## What about error handling messages from Formbuilder Validators?
You can add the error messages below the Bookmaker Lite and reference to the input field via the  FormControllName.
In component:
```javascript
    this.generatedFormGroup = this.formBuilder.group({
      dateFrom: ["", Validators.required],
    })
```
In HTML:
```html
<p *ngIf="generatedFormGroup.get('dateFrom')?.errors?.['required']">
    This field is required
</p>
```

There is a build in `invalid` handler, that can be used as an evaluator connected to the entire form (if the input field is in a formgroup). This handler will be activated when the date don't follow the selected `pattern`.
```html
<button type="submit" [disabled]="generatedFormGroup.invalid">
    Submit form
</button>
```

## What if I want a different patterns of the input field, can I change it?
Yes, you can, since version 1.1.0. use the parameter `pattern` to change format. The pattern is using lowercase letters for year, month and day. 

```html
<bm-datepicker-lite pattern="mm/dd/yy"></bm-datepicker-lite>
```

The default format is `yyyy-mm-dd` and do not need the pattern to be written out.

The available patterns are... Have it your way! yyyy.mm.dd, dd/yyyy/mm, mm-dd-yy - everything goes!
But there are some restrictions: 
- The dividers can only be space ` `, period `.`, forward slash `/` or dash `-`.
- There can only be one kind of divider. Mixing different dividers won't work
- Days and months must two letters (mm) and (dd)
- Year can be either two letters (yy) or four letters (yyyy)

## Why can't I manually change the date in the input field?
This is a lite-version and is intend to be easy to use and therefore the ability to do change values inside the input field is disabled. 
The way to use Bookmaker Lite, version 2.x.x is:
1. Select a date in the calendar. 
2. The selected date will be formatted according to a pattern of choice. 
3. The formated date will be presented in the input field and used via selected `formControlNameInput` or use the date value from the callback `calendarOutput`.

## I don't use Formbuilder, can I get a callback response from Bookmaker Lite?
You can use `calendarOutput` to hook up to a response function of your own. The response value is the same as selected pattern. Default pattern is `yyyy-mm-dd`.
Make a function in the same component as the Bookmaker Lite to fetch the event value from the `calendarOutput`.
```html
<bm-datepicker-lite (calendarOutput)="calendarToOutput($event)"></bm-datepicker-lite>
```

# Names, labels and texts
## Hey, I want to change the label! Can I do that?
Use the `label` option to change the text. 
```html
<bm-datepicker-lite label="Date from"></bm-datepicker-lite>
```

## What about the placeholder, can I change that too?
Use the `placeholder` option to change the text. 
```html
<bm-datepicker-lite placeholder="Pick a date"></bm-datepicker-lite>
```

## How I change the name of the Weekdays?
Bookmaker Lite comes with a default array of the names in english. Use it to change it to a language of your choice. Connect it to `weekdays` option.

In the HTML:
```html
<bm-datepicker-lite [weekdays]="weekdays"></bm-datepicker-lite>
```
In the component:
```javscript
weekdays = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
```

## How I change the name of the Months name?
Bookmaker Lite comes with a default array of the names in english. Use it to change it to a language of your choice. Connect it to `months` option.

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
## I want a different calendar button icon. How do I change that (even if the default icon is quite fancy)?
Bookmaker Lite have a default calendar icon. If you want to use you own, you can add it inside the Bookmaker Lite. 
```html
<bm-datepicker-lite><ng-icon name="akarCalendar" size="16px" color="white"></ng-icon></bm-datepicker-lite>
```

## Can I change the stylesheet?
You can change everything in Bookmaker Lite. That's the beauty. It is a list of styles, but hey, you are a developer, aren't you? You can use the stylesheet to change parts or everything, it's up to you. Treat it as an usual stylesheet in SCSS. This is an overview of all elements, but you can concentrate it and put togther elements as you wish.  

Use `styleSheet` option to do the changes, and `formControlNameInput` to make an individual stylesheet:

In the HTML: 
```html
<bm-datepicker-lite 
formControlNameInput="dateFrom"
[styleSheet]="styles">
<bm-datepicker-lite>
```
In the component: 
```javascript
 styles = `
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
.bm-td-inner:hover p{color:#fff !important}
.bm-td-selected-day p{color:#fff !important}
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
.bm-weekend {color: #ff0000 !important}
  `;
```

## There is a reference to the font "Poppins" in the stylesheet, but I only get Verdana?
To handle external fonts in Bookmaker, you need to have them globally in your Angular project. Use the link below in your root `index.html` to get Poppins fontstyle:
```html
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap"
      rel="stylesheet" />
```

## Can I change the week to start on a Sunday? 
Yes! Use the `[isSunday]` option (and it must be inside square brackets `[]`).
```html
<bm-datepicker-lite [isSunday]=true></bm-datepicker-lite>
```

## Other questions?
### Can I use it in a commercial web site?
Yes, you can. 

### Can I change the animations? 
No. This is a lite-version. :-)

### Can I change placement of the datepicker and input field? 
Sorry. Lite-version, you know. :-)

# Author
Steffo Dimfelt
[steffo.dimfelt@gmail.com](mailto:steffo.dimfelt@gmail.com)

# Version list
- 2.1.4: Update peerDependencies
- 2.1.3: (Deprected)
- 2.1.2: Stylesheet bug fix & add option isSunday