const integerFormatter=new Intl.NumberFormat('en-US',{maximumFractionDigits:0});
export function formatRupiah(value:bigint):string {return `${value<0n?'−':''}Rp${integerFormatter.format(value<0n?-value:value)}`;}
// Display-only abbreviation. Exact monetary values never pass through Number.
export function compactRupiah(value:bigint):string{
 const abs=value<0n?-value:value;const unit=abs>=1000000000n?1000000000n:abs>=1000000n?1000000n:1n;
 if(unit===1n)return formatRupiah(value);
 const hundredths=(abs*100n+unit/2n)/unit;
 return `${value<0n?'−':''}Rp${hundredths/100n}.${String(hundredths%100n).padStart(2,'0')}${unit===1000000000n?'bn':'m'}`;
}
