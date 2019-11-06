const oxcowbull = (name, suggession) => {
    if(!(/^[a-z]+$/i.test(name)) || !(/^[a-z]+$/i.test(suggession))){
        return "Name and Suggession name should contains only letter"
    }
    else if (name.trim() == "" || suggession.trim() == "") {
        return "Please enter valid Name and Suggession Name"
    }
    else if (name.trim().length != suggession.trim().length) {
        return "Name and suggession name length should be equal"
    }
    else {
        name = name.trim().replace(/\s/g, "").toLowerCase();
        suggession = suggession.trim().toLowerCase();
        var suggArr = suggession.split("");

        var oxcount = 0;
        var bullcount = 0;
        var cowcount = 0;
        suggArr.forEach((element, i) => {
            if (name.indexOf(element) > -1) {
                if (name.indexOf(element) == i) {
                    cowcount = cowcount + 1;
                } else {
                    bullcount = bullcount + 1;
                }

            } else {
                oxcount = oxcount + 1;
            }
        });

        var result = "";
        if (oxcount > 0) {
            result = result + oxcount + " Ox";
        }
        if (cowcount > 0) {
            result = result + " " + cowcount + " Cow";
        }
        if (bullcount > 0) {
            result = result + " " + bullcount + " Bull";
        }

        return result;
    }
}
module.exports = oxcowbull;