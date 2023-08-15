using System;
using Microsoft.AspNetCore.Components;

public class HtmlEditorHtmlChangedEventArgs : EventArgs {
    public string HtmlString { get; set; }
}

[EventHandler("ondxbl:htmleditor-htmlchanged", typeof(HtmlEditorHtmlChangedEventArgs))]

public static class EventHandlers { }
