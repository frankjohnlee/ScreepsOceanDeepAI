module.exports = {

    run: function(arr){ let s = new Set(arr);
        let it = s.values();
        return Array.from(it);}
};