$(document).ready(function(){
	$('#main').hide();
	$('#main').fadeIn(1000);
});


// contact form

function checkforblank(){
        if (document.getElementById('name').value ==""){
            alert("Please enter your name.");
            document.getElementById('name').style.borderColor = "red";
            return false;
        }
        else if(document.getElementById('subject').value == ""){
            alert("Please enter a subject.");
            document.getElementById('subject').style.borderColor = "red";
            return false;
        }
        else{
            alert("Message is now sent!");
            return true;
        }
    }

// Image Slideshow
var images = document.getElementById("gallery").getElementsByTagName("img");

for (var i = 0; i < images.length; i ++){
    images[i].onmouseover = function(){
        this.style.cursor = 'hand';
        this.style.borderColor = 'red';
    }

    images[i].onmouseout = function(){
        this.style.cursor = 'hand';
        this.style.borderColor = 'black';
    }
}

function changeImage(event)
  {
    event = event || window.event;

    var targetElement = event.target || event.srcElement;

   // check if element is an image
   if(targetElement.tagName == "IMG")
    {
        document.getElementById("mainImage").src = targetElement.getAttribute("src");
    }

  }