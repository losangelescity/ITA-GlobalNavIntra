var scriptSource = (function(scripts) {
    var scripts = document.getElementsByTagName('script'),
        script = scripts[scripts.length - 1];

    if (script.getAttribute.length !== undefined) {
        return script.src
    }

    return script.getAttribute('src', -1);
}());
scriptSource = scriptSource.replace("intranet_nav.js","");
console.log(scriptSource);
// Add our CSS.
if(document.createStyleSheet) {
  document.createStyleSheet(scriptSource+'resources/font-awesome.min.css');
  document.createStyleSheet(scriptSource+'resources/intranet_nav.css');
}
else {
  var styles = "@import url('"+scriptSource+"resources/font-awesome.min.css');";
  var newSS=document.createElement('link');
  newSS.rel='stylesheet';
  newSS.href='data:text/css,'+escape(styles);
  document.getElementsByTagName("head")[0].appendChild(newSS);
  styles = "@import url('"+scriptSource+"resources/intranet_nav.css');";
  newSS=document.createElement('link');
  newSS.rel='stylesheet';
  newSS.href='data:text/css,'+escape(styles);
  document.getElementsByTagName("head")[0].appendChild(newSS);
}

 var intranetnar = document.createElement('div');
    intranetnar.innerHTML = resource_skeleton();
 // Give it an id so we can style.
  intranetnar.setAttribute('id', 'intranet-nav');

document.addEventListener('DOMContentLoaded', function(event) {
    // Stick the menu up top.
    document.body.insertBefore(intranetnar, document.body.firstChild);
  });
  function resource_skeleton() {
    var html = '<div id="global-nav-leftwrap">\
    <div id="global-nav-la-logo">\
     <img src="resources/la_lines.svg"  height=50 border=0 alt="Home">\
    </div></div><div id="global-nav-rightwrap">\
  <div class="global-nav-service">\
      <a href="http://myla311.ci.la.ca.us/portal/faces/home/directory" id="global-nav-311" target="_blank" title="CITY SERVICES"><span class="global-nav-service-icon">311</span><span class="global-nav-text global-nav-service-text"> CITY SERVICES</span></a>\
    </div>\
    <div class="global-nav-service">\
      <a href="http://cityfone.ci.la.ca.us/" id="global-nav-self" target="_blank"><span class="global-nav-service-icon"><i class="fa fa-phone" aria-hidden="true"></i></span><span class="global-nav-text global-nav-service-text"> CITYFONE</span></a>\
    </div>\
    <div class="global-nav-service">\
      <a href="http://mail.lacity.org/" id="global-nav-self" target="_blank"><span class="global-nav-service-icon"><i class="fa fa-envelope" aria-hidden="true"></i></span><span class="global-nav-text global-nav-service-text"> CITY EMAIL</span></a>\
    </div>\
    <div class="global-nav-service">\
      <a href="http://insidela.ci.la.ca.us/index.html" id="global-nav-self" target="_blank"><span class="global-nav-service-icon"><i class="fa fa-building " aria-hidden="true"></i></span><span class="global-nav-text global-nav-service-text"> INSIDE LA</span></a>\
    </div>\
    <div class="global-nav-service">\
      <a href="http://cityforms.ci.la.ca.us/" id="global-nav-self" target="_blank"><span class="global-nav-service-icon"><i class="fa fa-file-text" aria-hidden="true"></i></span><span class="global-nav-text global-nav-service-text"> CITY FORMS</span></a>\
    </div>\
    <div class="global-nav-service">\
      <a href="https://cityoflaprod.service-now.com/navpage.do" id="global-nav-self" target="_blank"><span class="global-nav-service-icon"><i class="fa fa-power-off" aria-hidden="true"></i></span><span class="global-nav-text global-nav-service-text"> SNOW</span></a>\
    </div></div></div></div>'
  return html;
  }