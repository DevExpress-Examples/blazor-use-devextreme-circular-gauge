export async function initializeHtmlEditor(element, toolbarContainer, html) {
    let dispatchTimeoutId = -1;
    return new DevExpress.ui.dxHtmlEditor(element, {
        height: "50%",
        value: html,
        valueType: "html",
        onValueChanged: arg => dispatchHtmlChanged(arg.value),
        toolbar: {
            container: toolbarContainer,
            items: [
                "undo", "redo", "separator",
                {
                    name: "size",
                    acceptedValues: ["8pt", "10pt", "12pt", "14pt", "18pt", "24pt", "36pt"]
                },
                {
                    name: "font",
                    acceptedValues: ["Arial", "Courier New", "Georgia", "Impact", "Lucida Console", "Tahoma", "Times New Roman", "Verdana"]
                },
                "separator", "bold", "italic", "strike", "underline", "separator",
                "alignLeft", "alignCenter", "alignRight", "alignJustify", "separator",
                "orderedList", "bulletList", "separator",
                {
                    name: "header",
                    acceptedValues: [false, 1, 2, 3, 4, 5]
                }, "separator",
                "color", "background", "separator",
                "link", "image", "separator",
                "clear", "codeBlock", "blockquote"
            ]
        },
        mediaResizing: {
            enabled: true
        }
    });

    function dispatchHtmlChanged(newHtml) {
        clearTimeout(dispatchTimeoutId);
        dispatchTimeoutId = setTimeout(() => element.dispatchEvent(new HtmlEditorHtmlChangedEvent(newHtml)), 200);
    }
}

class HtmlEditorHtmlChangedEventContext {
    html = null;

    constructor(html) {
        this.htmlString = html;
    }
}
class HtmlEditorHtmlChangedEvent extends CustomEvent {
    static eventName = "dxbl:htmleditor-htmlchanged";

    constructor(html) {
        super(HtmlEditorHtmlChangedEvent.eventName, {
            detail: new HtmlEditorHtmlChangedEventContext(html),
            bubbles: true,
            composed: true,
            cancelable: false
        });
    }
}
window.Blazor.registerCustomEventType(HtmlEditorHtmlChangedEvent.eventName, {
    createEventArgs: x => x.detail
});
