function elm(id) {
    return document.getElementById(id);
};


function runFilter() {
    function setDisplay(node, bShow) {
        if (bShow) {
            node.style.display = '';
        } else {
            node.style.display = 'none';
        }
    }

    var input = document.querySelector('input.city-form__input');
    var list = document.querySelector('section.all-locations');
    var featuredList = document.querySelector('div.featured-location__content');

    function getLocationCity(locationDiv) {
        var result = false;
        var cityNode = locationDiv.querySelector('h4.location-list__city');
        if (!! cityNode) {
            result = cityNode.textContent;
        }
        return result;
    }
    function filterLocation(locationDiv, filterVal) {
        var ok = false;
        var cityName = getLocationCity(locationDiv);
        if (!! cityName) {
            ok = (cityName.toUpperCase().indexOf(filterVal) == 0);
        }
        setDisplay(locationDiv, ok);
        return ok ? 1 : 0;
    }

    function filterIndexDiv(indexDiv, filterVal) {
        var locationDivs = indexDiv.querySelectorAll("ul.location-list");
        var acc = 0; // reduce
        for(var i=0; i<locationDivs.length; i++) {
            var obj = locationDivs[i];
            acc += filterLocation(obj, filterVal);
        }
        setDisplay(indexDiv, (acc > 0));
    }

    function doFilter() {
        var filterVal =	input.value.toUpperCase();
        var indexDivs = list.querySelectorAll("div.branch-addresses__index");
        for(var i=0; i<indexDivs.length;i++) {
            var obj = indexDivs[i];
            filterIndexDiv(obj, filterVal);
        }
        setDisplay( featuredList, (filterVal.trim().length <= 0) ); 
    }

    function bindEvents() {
        input.addEventListener("keyup", function(evt) {
            doFilter();
        });
    }

    bindEvents();
}

document.addEventListener("DOMContentLoaded", function(event) {
    runFilter();
});

