function loadHome() {
  document.getElementById('home-body').style.backgroundImage = "url('https://young-machine.com/wp-content/uploads/2018/06/001-10.jpg')";

  const homePageTemplate = `
    <div id="bike-info">
        <h1>
            <span id="honda-span">Honda</span>
            <span id="fireblade-span">Fireblade</span>
            <span id="nineteen-span">2019</span>
        </h1>
        <h4>
            <span id="slogan-span">The Power of Dreams</span>
        </h4>
    </div>
    `;

  document.getElementById('home-body').innerHTML = homePageTemplate;
}

function loadHistory() {

  document.getElementById('container').style.backgroundImage = "none";
  document.getElementById('home-body').style.backgroundImage = "none";
  const aboutTemplate = `
        <div id="history-page-info"  class="col-lg-6 col-md-12 col-sm-12 float-left">
            <p>
                The Honda Fireblade is a family of sport motorcycles manufactured by Honda since 1992. The first model was designed by Tadao Baba. Previously, Honda also used the "Fireblade" name for their CBR250RR and CBR400RR. 
        
                The CBR1000RR , marketed in some countries as the "Fireblade", is a 998 cc liquid-cooled inline four-cylinder sportbike, introduced by Honda in 2004 as the 7th generation of the CBR series of motorcycles that began with the CBR900RR in 1992.
            </p>
        </div>
          <div  class='col-lg-6 col-md-12 col-sm-12 float-right'>
              <img id="history-page-image"  src="https://cdp.azureedge.net/products/USA/HO/2019/MC/SUPERSPORT/CBR1000RR_SP/50/GRAND_PRIX_TRI-COLOR/2000000001.jpg" alt='honda fireblade image'">
          </div>
        </div>
        ` ;

  //document.getElementById('home-body').style.backgroundImage = "url('https://financialexpresswpcontent.s3.amazonaws.com/uploads/2018/05/fireblade-small.jpg')";
  //document.getElementById('home-body').style.height = "569px";
  document.getElementById('home-body').innerHTML = aboutTemplate;
}
function loadModels() {
  document.getElementById('home-body').style.backgroundImage = "none";
  document.getElementById('container').style.backgroundImage = "none";
  document.getElementById('home-body').innerHTML = "";

  const loadImages = `
<div class="col-lg-4  card float-left" style="width: 36rem;">
  <img src="https://www.jsgedge.co.uk/media/fireblade-2017-cbr1000rr.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">2017 - THE THIRTEENTH GENERATION</h5>
    <p class="card-text">Finally here, the brand-new 2017 Fireblade is the next step of Total Control, bringing a lighter-than-ever and sharper performance to the Honda supersport range. Still following the core philosophies, design goals and core ideas built into the original 1992 edition, the brand-new Blade features an all-new frame, bodywork and engine.
</p>
    
  </div>
</div>
 <div class="col-lg-4  card float-left" style="width: 36rem;">
  <img src="https://www.jsgedge.co.uk/media/fireblade-2012-cbr1000rr.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">2012 - THE TWELFTH GENERATION</h5>
    <p class="card-text">Marking the 20th anniversary of the Fireblade, the CBR1000RR had already come a long way, focusing all this time on its core design goals and philosophies, controllable riding and maximum performance. With newly structured front and rear suspensions, revised engine fuel injection settings and a smoother ride all-around.</p>
    
  </div>
</div>
<div class="col-lg-4  card float-left" style="width: 36rem;">
  <img src="https://www.jsgedge.co.uk/media/fireblade-2010-cbr1000rr.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">2010 - THE ELEVENTH GENERATION</h5>
    <p class="card-text">Still based on the previous 2009 model, the eleventh generation offered a more refined performance to enjoy the ride. Initially, mitigating the torque variations during cruising, the ACG flywheel diameter was increased, along with modifications to the crankshaft flywheel attachment point, making it more rigid, increasing the inertial mass of the crankshaft and related parts.
</p>
    
  </div>
</div>
<div class="col-lg-4 card float-left" style="width: 36rem;">
  <img src="https://www.jsgedge.co.uk/media/fireblade-2009-cbr1000rr.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">2009 - THE TENTH GENERATION</h5>
    <p class="card-text">Featuring the world's first electronically controlled combined ABS for a supersport bike, the CBR1000RR Fireblade had returned yet again with innovation and control in mind. This electronic accuracy for the braking system created a much higher degree of accuracy and control, allowing the rider to apply the precise amount of braking needed, making every situation within reach.
</p>
    
  </div>
</div>
<div class="col-lg-4 card float-left" style="width: 36rem;">
  <img src="https://www.jsgedge.co.uk/media/fireblade-2008-cbr1000rrr.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">2008 - THE NINTH GENERATION</h5>
    <p class="card-text">Following an alternative concept "All the best in Super Sport", the ninth-generation Fireblade aimed to be top of the class in rideability, design and power. Featuring a back torque limiter system which was adopted from the RC212V, as well as an assist slipper clutch that reduced clutch lever load. 

</p>
    
  </div>
</div>
<div class="col-lg-4  card" style="width: 36rem;">
  <img src="https://www.jsgedge.co.uk/media/fireblade-2007-cbr1000rr7.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">2007 - THE EIGHTH REVISION</h5>
    <p class="card-text">The arrival of the legendary Repsol edition, we don't need to stress how popular this generation became, the Repsol edition became a staple of the Honda line-up, becoming one the top-selling models for the Fireblade family, spanning over further generations. Featuring a bold orange, black, red and white colour scheme, its metallic shine caught attention across each market.</p>
   
  </div>
</div>
    `;

  document.getElementById('home-body').innerHTML = loadImages;

}
function loadContact() {
  document.getElementById('home-body').style.backgroundImage = "none";
  document.getElementById('container').style.backgroundImage = "none";

  const loadContact = `
  <div id="contact-page-info"  class="col-lg-6 col-md-12 col-sm-12 float-left">
          <h1>Customer Care</h1>
            <span class="glyphicon glyphicon-envelope"><i class='fas fa-phone' style='font-size:24px'></i> 0800 466 321</span>
            <h4><i class='far fa-envelope'></i> care@honda.co.za</h4>
          </div>
          <div  class='col-lg-6 col-md-12 col-sm-12 float-right'>
              <img id="contact-page-image"  src="https://cdp.azureedge.net/products/USA/HO/2019/MC/SUPERSPORT/CBR1000RR_SP/50/GRAND_PRIX_TRI-COLOR/2000000001.jpg" alt='honda fireblade image'">
          </div>
        </div>
  `;
  document.getElementById('home-body').innerHTML = loadContact;


}



