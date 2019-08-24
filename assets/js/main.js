var fundy = fundy || (function () {

    function toggleSelectedItem(event) {
        console.log(event.data.totalizerElement);
        
        var totalElem = event.data.totalizerElement;
        var currentTotal = Number(totalElem.text());
        var price = Number($(this).attr("data-price"));

        $(this).toggleClass("selected");
        
        if ($(this).hasClass("selected"))
        {
            currentTotal += price;
            $(this).find(".ProductSelected").show();

        }
        else
        {
            currentTotal -= price;
            $(this).find(".ProductSelected").hide();
        }

        totalElem.text(currentTotal);

    }


    return {
        toggleSelectedItem: toggleSelectedItem
    }

})();