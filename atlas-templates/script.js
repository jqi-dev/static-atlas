function attach_component(component_id, source) {
    // var host = document.currentScript.ownerDocument.baseURI;
    // console.log(host)
    // component_id.attachShadow({mode: 'open'});
    // component_id.shadowRoot.innerHTML = load_page(source)
    // let tmpl = document.createElement('template');
    //   tmpl.innerHTML = load_page(source);

      // `
      //   <style>:host { ... }</style> <!-- look ma, scoped styles -->
      //   <b>IN THE SHADOW DOM</b>
      //   <slot></slot>
      // `;

    // customElements.define('x-foo-shadowdom', class extends HTMLElement {
    //   constructor() {
    //     super(); // always call super() first in the ctor.
    //
    //     // Attach a shadow root to the element.
    //     let shadowRoot = this.attachShadow({mode: 'open'});
    //     shadowRoot.appendChild(tmpl.content.cloneNode(true));
    //   }
    // });

    // let component_html = load_page(source);
    //
    // let component_js = load_page()
    //
    // console.log("TEST")
    //
    // var HTMLCustomElement = Object.create(HTMLElement.prototype);
    //   HTMLCustomElement.createdCallback = function() {
    //     console.log("TESTING")
    //     component_id.attachShadow({mode: 'open'});
    //     component_id.shadowRoot.innerHTML = load_page(source)
    //   };
    //
    // // Define the element
    // var NewElement = document.registerElement('new-element', {
    //   prototype: HTMLCustomElement
    // });
    //
    // // instanciate the custom element
    // var newElement = new NewElement();
    //
    // document.getElementById(component_id).appendChild(newElement);

    // class Greeting extends React.Component {
    //   render() {
    //     load_page(source);
    //   }
    // }
    //
    //
    // $(document).ready(function () {
    //   ReactDOM.render(
    //     React.createElement(Greeting),
    //     document.getElementById("component_id")
    //   );
    // });

    // var testComponent = xcomponent.create({
    //   tag: 'my-component-tag',
    //   url: './images/band-structure.html',
    //   dimensions: {
    //     width: '100%',
    //     height: '100%'
    //   }
    // });
    //
    // testComponent.render({
    // }, '#test');


}

function load_page(href) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", href, false);
    xmlhttp.send();
    return xmlhttp.responseText;
}
