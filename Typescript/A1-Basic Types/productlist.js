var mobileName = "Samsung Galaxy Note 7";
var mobilePrice = 14999;
var mobileStatus = true;
document.getElementById("pName").innerHTML = mobileName;
document.getElementById("pPrice").innerHTML = mobilePrice.toString();
if(mobileStatus)
{
    document.getElementById("pAvailable").innerHTML = "Available";
}
else
{
    document.getElementById("pAvailable").innerHTML = "Unavailable";
}
