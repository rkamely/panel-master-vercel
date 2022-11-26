/**
 * @return {string}
 */
function PriceFormat(price) {
    price+= '';
    price= price.replace(',', '');
    let x = price.split('.');
    let y = x[0];
    let z= x.length > 1 ? '.' + x[1] : '';
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(y))
        y= y.replace(rgx, '$1' + ',' + '$2');
    return y+ z;
}

export default PriceFormat;