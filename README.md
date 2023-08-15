# Blazor - Use Gauges, HTML Editor, and Map in a Blazor Application

Blazor applications allow you to use external JavaScript libraries to integrate components that are not currently present in the DevExpress Blazor suite. This example demonstrates how to incorporate [DevExtreme widgets](https://js.devexpress.com/Demos/WidgetsGallery/) into a Blazor application. 

![HTML Editor in DevExpress Blazor App](readme.md)

## Implementation Details

The example solution contains **JSWidgetsRCL** and **DxtComponentsInBlazor** projects. The first project wraps the following DevExtreme widgets:

* [Gauge](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/Overview/jQuery/Light/)
* [HTML Editor](https://js.devexpress.com/Demos/WidgetsGallery/Demo/HtmlEditor/Overview/jQuery/Light/)
* [Map](https://js.devexpress.com/Demos/WidgetsGallery/Demo/VectorMap/Overview/jQuery/Light/)

For each widget, _DevExtreme<WidgetName>.razor_ and _DevExtreme<WidgetName>.razor.js_ files store wrapper implementation. HTML Editor also implements a custom event that handles changes in the component's content: registers a [custom event handler](/JSWidgetsRCL/EventHandlers.cs), implements it on a [Blazor side](/JSWidgetsRCL/DevExtremeComponents/DevExtremeHtmlEditor.razor#L21) and maps it to the corresponding [DevExtreme event handler](/JSWidgetsRCL/DevExtremeComponents/DevExtremeHtmlEditor.razor.js#L7). You can implement other events in the same way if needed.

Each widget also renders the **DevExtremeResources.razor** component. This component loads DevExtreme resources when you open a page with a DevExtreme component for the first time.

The **DxtComponentsInBlazor** project references **JSWidgetsRCL**. This allows you to use wrappers as regular Blazor components, for instance:

```Razor
<DevExtremeMap />
```

## Files to Review

[DevExtremeResources.razor](/JSWidgetsRCL/DevExtremeComponents/DevExtremeResources.razor)
[DevExtremeResources.razor.js](/JSWidgetsRCL/DevExtremeComponents/DevExtremeResources.razor.js)
[DevExtremeHtmlEditor.razor](/JSWidgetsRCL/DevExtremeComponents/DevExtremeHtmlEditor.razor)

## Documentation

[](https://docs.devexpress.com/Blazor/403578)
