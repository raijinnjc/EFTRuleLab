const integerFormatter=new Intl.NumberFormat('en-US',{maximumFractionDigits:0});
export function formatRupiah(value:bigint):string {return `${value<0n?'−':''}Rp${integerFormatter.format(value<0n?-value:value)}`;}
