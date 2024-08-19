// eto yung mag fetch ng api 
const cryptoApi = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
let cryptoData ;

async function cryptoApiInfo() {
    try {
        const response = await fetch(cryptoApi);
        const jsonContent = await response.json();
        cryptoData = jsonContent;
        console.log(cryptoData);
    } catch (error) {
        console.error('Failed to load crypto data:', error);
    }
}
cryptoApiInfo();

// eto yung function para mag pop yung bitcoin
const popupContainer = document.getElementById('popup-container');

function bitcoinPopUp(cryptoData) {
    const btcContainer = document.createElement('div');
    btcContainer.classList.add('fixed', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'bg-white', 'p-4', 'border', 'border-gray-400', 'w-1/3', 'flex', 'flex-col', 'gap-3', 'rounded', 'xl:w-1/2', 'md:w-3/4', 'sm:w-full');
    popupContainer.innerHTML = ''; 
    popupContainer.appendChild(btcContainer);

    const btcPriceAndLogo = document.createElement('div');
    btcPriceAndLogo.classList.add('flex', 'gap-2', 'items-center');
    btcContainer.appendChild(btcPriceAndLogo);

    const btcLogo = document.createElement('img');
    btcLogo.classList.add('w-9');
    btcLogo.src = cryptoData[0].image;
    btcLogo.alt = 'BTC';
    btcPriceAndLogo.appendChild(btcLogo);

    const btcName = document.createElement('span');
    btcName.classList.add('text-slate-900', 'font-bold', 'text-2xl');
    btcName.textContent = cryptoData[0].name;
    btcPriceAndLogo.appendChild(btcName);

    const btcSymbol = document.createElement('span');
    btcSymbol.classList.add('text-slate-400', 'uppercase', 'text-xl');
    btcSymbol.textContent = cryptoData[0].symbol;
    btcPriceAndLogo.appendChild(btcSymbol);

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('text-2xl', 'absolute', 'top-2', 'right-2', 'font-bold', 'rounded-full', 'px-3','pb-2', 'bg-slate-500', 'hover:scale-110', 'transition', 'text-white');
    closeBtn.textContent = 'x';
    closeBtn.addEventListener('click', ()=>{
        popupContainer.classList.toggle('hidden');
    })
    btcPriceAndLogo.appendChild(closeBtn);

    const btcPrice = document.createElement('div');
    btcPrice.classList.add('text-slate-950', 'text-6xl', 'font-bold', 'mb-3');
    btcPrice.textContent = '$'+ Number(cryptoData[0].current_price).toFixed(2).toLocaleString('en-US');
    btcContainer.appendChild(btcPrice);

    const btcMartetCapContainer = document.createElement('div');
    btcMartetCapContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    btcContainer.appendChild(btcMartetCapContainer);

    const btcMarketCap = document.createElement('span');
    btcMarketCap.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2')
    btcMarketCap.textContent = 'Market Cap';
    btcMartetCapContainer.appendChild(btcMarketCap);

    const btcMarketCapPrice = document.createElement('span');
    btcMarketCapPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold')
    btcMarketCapPrice.textContent = '$'+ Number(cryptoData[0].market_cap).toLocaleString('en-US');
    btcMartetCapContainer.appendChild(btcMarketCapPrice);

    const btcFullyDillutedContainer = document.createElement('div');
    btcFullyDillutedContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    btcContainer.appendChild(btcFullyDillutedContainer);

    const btcFullyDilluted = document.createElement('span');
    btcFullyDilluted.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2')
    btcFullyDilluted.textContent = 'Fully Diluted Valuation';
    btcFullyDillutedContainer.appendChild(btcFullyDilluted);

    const btccFullyDillutedPrice = document.createElement('span');
    btccFullyDillutedPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold')
    btccFullyDillutedPrice.textContent = '$'+ Number(cryptoData[0].fully_diluted_valuation).toLocaleString('en-US');
    btcFullyDillutedContainer.appendChild(btccFullyDillutedPrice);

    const btcTotalVolumeContainer = document.createElement('div');
    btcTotalVolumeContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    btcContainer.appendChild(btcTotalVolumeContainer);

    const btcTotalVolume = document.createElement('span');
    btcTotalVolume.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2')
    btcTotalVolume.textContent = '24 Hour Trading Vol';
    btcTotalVolumeContainer.appendChild(btcTotalVolume);

    const btcTotalVolumePrice = document.createElement('span');
    btcTotalVolumePrice.classList.add('text-slate-900', 'text-lg', 'font-semibold')
    btcTotalVolumePrice.textContent = '$'+ Number(cryptoData[0].total_volume).toLocaleString('en-US');
    btcTotalVolumeContainer.appendChild(btcTotalVolumePrice);

    const btcCirculatingSupplyContainer = document.createElement('div');
    btcCirculatingSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    btcContainer.appendChild(btcCirculatingSupplyContainer);

    const btcCirculationSupply = document.createElement('span');
    btcCirculationSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2')
    btcCirculationSupply.textContent = 'Circulating Supply';
    btcCirculatingSupplyContainer.appendChild(btcCirculationSupply);

    const btcCirculationSupplyPrice = document.createElement('span');
    btcCirculationSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold')
    btcCirculationSupplyPrice.textContent = Number(cryptoData[0].circulating_supply).toLocaleString('en-US');
    btcCirculatingSupplyContainer.appendChild(btcCirculationSupplyPrice);

    const btcTotalSupplyContainer = document.createElement('div');
    btcTotalSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    btcContainer.appendChild(btcTotalSupplyContainer);

    const btcTotalSupply = document.createElement('span');
    btcTotalSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2')
    btcTotalSupply.textContent = 'Total Supply';
    btcTotalSupplyContainer.appendChild(btcTotalSupply);

    const btcTotalSupplyPrice = document.createElement('span');
    btcTotalSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold')
    btcTotalSupplyPrice.textContent = Number(cryptoData[0].total_supply).toLocaleString('en-US');
    btcTotalSupplyContainer.appendChild(btcTotalSupplyPrice);

    const btcMaxSupplyContainer = document.createElement('div');
    btcMaxSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    btcContainer.appendChild(btcMaxSupplyContainer);

    const btcMaxSupply = document.createElement('span');
    btcMaxSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2')
    btcMaxSupply.textContent = 'Max Supply';
    btcMaxSupplyContainer.appendChild(btcMaxSupply);

    const btcMaxSupplyPrice = document.createElement('span');
    btcMaxSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold')
    btcMaxSupplyPrice.textContent = Number(cryptoData[0].max_supply).toLocaleString('en-US');
    btcMaxSupplyContainer.appendChild(btcMaxSupplyPrice);
}

// eto yung click event para mag trigger yung bitcoin popup
document.getElementById('bitcoin').addEventListener('click', () => {
    if(cryptoData.length > 0){
        popupContainer.classList.toggle('hidden');
        bitcoinPopUp(cryptoData);
    }else{
        alert('Loading.. click again');
    }
});


function usdtPopUp(cryptoData) {
    const usdtContainer = document.createElement('div');
    usdtContainer.classList.add('fixed', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'bg-white', 'p-4', 'border', 'border-gray-400', 'w-1/3', 'flex', 'flex-col', 'gap-3', 'rounded', 'xl:w-1/2', 'md:w-3/4', 'sm:w-full');
    popupContainer.innerHTML = ''; 
    popupContainer.appendChild(usdtContainer);

    const usdtPriceAndLogo = document.createElement('div');
    usdtPriceAndLogo.classList.add('flex', 'gap-2', 'items-center');
    usdtContainer.appendChild(usdtPriceAndLogo);

    const usdtLogo = document.createElement('img');
    usdtLogo.classList.add('w-9');
    usdtLogo.src = cryptoData[2].image;
    usdtLogo.alt = 'USDT';
    usdtPriceAndLogo.appendChild(usdtLogo);

    const usdtName = document.createElement('span');
    usdtName.classList.add('text-slate-900', 'font-bold', 'text-2xl');
    usdtName.textContent = cryptoData[2].name;
    usdtPriceAndLogo.appendChild(usdtName);

    const usdtSymbol = document.createElement('span');
    usdtSymbol.classList.add('text-slate-400', 'uppercase', 'text-xl');
    usdtSymbol.textContent = cryptoData[2].symbol;
    usdtPriceAndLogo.appendChild(usdtSymbol);

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('text-2xl', 'absolute', 'top-2', 'right-2', 'font-bold', 'rounded-full', 'px-3','pb-2', 'bg-slate-500', 'hover:scale-110', 'transition', 'text-white');
    closeBtn.textContent = 'x';
    closeBtn.addEventListener('click', ()=>{
        popupContainer.classList.toggle('hidden');
    })
    usdtPriceAndLogo.appendChild(closeBtn);

    const usdtPrice = document.createElement('div');
    usdtPrice.classList.add('text-slate-950', 'text-6xl', 'font-bold', 'mb-3');
    usdtPrice.textContent = '$'+ Number(cryptoData[2].current_price).toFixed(2).toLocaleString('en-US');
    usdtContainer.appendChild(usdtPrice);

    const usdtMarketCapContainer = document.createElement('div');
    usdtMarketCapContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    usdtContainer.appendChild(usdtMarketCapContainer);

    const usdtMarketCap = document.createElement('span');
    usdtMarketCap.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2')
    usdtMarketCap.textContent = 'Market Cap';
    usdtMarketCapContainer.appendChild(usdtMarketCap);

    const usdtMarketCapPrice = document.createElement('span');
    usdtMarketCapPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold')
    usdtMarketCapPrice.textContent = '$'+ Number(cryptoData[2].market_cap).toLocaleString('en-US');
    usdtMarketCapContainer.appendChild(usdtMarketCapPrice);

    const usdtFullyDilutedContainer = document.createElement('div');
    usdtFullyDilutedContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    usdtContainer.appendChild(usdtFullyDilutedContainer);

    const usdtFullyDiluted = document.createElement('span');
    usdtFullyDiluted.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2')
    usdtFullyDiluted.textContent = 'Fully Diluted Valuation';
    usdtFullyDilutedContainer.appendChild(usdtFullyDiluted);

    const usdtFullyDilutedPrice = document.createElement('span');
    usdtFullyDilutedPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold')
    usdtFullyDilutedPrice.textContent = '$'+ Number(cryptoData[2].fully_diluted_valuation).toLocaleString('en-US');
    usdtFullyDilutedContainer.appendChild(usdtFullyDilutedPrice);

    const usdtTotalVolumeContainer = document.createElement('div');
    usdtTotalVolumeContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    usdtContainer.appendChild(usdtTotalVolumeContainer);

    const usdtTotalVolume = document.createElement('span');
    usdtTotalVolume.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2')
    usdtTotalVolume.textContent = '24 Hour Trading Vol';
    usdtTotalVolumeContainer.appendChild(usdtTotalVolume);

    const usdtTotalVolumePrice = document.createElement('span');
    usdtTotalVolumePrice.classList.add('text-slate-900', 'text-lg', 'font-semibold')
    usdtTotalVolumePrice.textContent = '$'+ Number(cryptoData[2].total_volume).toLocaleString('en-US');
    usdtTotalVolumeContainer.appendChild(usdtTotalVolumePrice);

    const usdtCirculatingSupplyContainer = document.createElement('div');
    usdtCirculatingSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    usdtContainer.appendChild(usdtCirculatingSupplyContainer);

    const usdtCirculatingSupply = document.createElement('span');
    usdtCirculatingSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2')
    usdtCirculatingSupply.textContent = 'Circulating Supply';
    usdtCirculatingSupplyContainer.appendChild(usdtCirculatingSupply);

    const usdtCirculatingSupplyPrice = document.createElement('span');
    usdtCirculatingSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold')
    usdtCirculatingSupplyPrice.textContent = Number(cryptoData[2].circulating_supply).toLocaleString('en-US');
    usdtCirculatingSupplyContainer.appendChild(usdtCirculatingSupplyPrice);

    const usdtTotalSupplyContainer = document.createElement('div');
    usdtTotalSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    usdtContainer.appendChild(usdtTotalSupplyContainer);

    const usdtTotalSupply = document.createElement('span');
    usdtTotalSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2')
    usdtTotalSupply.textContent = 'Total Supply';
    usdtTotalSupplyContainer.appendChild(usdtTotalSupply);

    const usdtTotalSupplyPrice = document.createElement('span');
    usdtTotalSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold')
    usdtTotalSupplyPrice.textContent = Number(cryptoData[2].total_supply).toLocaleString('en-US');
    usdtTotalSupplyContainer.appendChild(usdtTotalSupplyPrice);

    const usdtMaxSupplyContainer = document.createElement('div');
    usdtMaxSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    usdtContainer.appendChild(usdtMaxSupplyContainer);

    const usdtMaxSupply = document.createElement('span');
    usdtMaxSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2')
    usdtMaxSupply.textContent = 'Max Supply';
    usdtMaxSupplyContainer.appendChild(usdtMaxSupply);

    const usdtMaxSupplyPrice = document.createElement('span');
    usdtMaxSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold')
    usdtMaxSupplyPrice.textContent = Number(cryptoData[2].max_supply).toLocaleString('en-US');
    usdtMaxSupplyContainer.appendChild(usdtMaxSupplyPrice);
}

document.getElementById('usdt').addEventListener('click', () => {
    if(cryptoData.length > 0){
        popupContainer.classList.toggle('hidden');
        usdtPopUp(cryptoData);
    }else{
        alert('Loading.. click again');
    }
});


function ethPopUp(cryptoData) {
    const ethContainer = document.createElement('div');
    ethContainer.classList.add('fixed', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'bg-white', 'p-4', 'border', 'border-gray-400', 'w-1/3', 'flex', 'flex-col', 'gap-3', 'rounded', 'xl:w-1/2', 'md:w-3/4', 'sm:w-full');
    popupContainer.innerHTML = ''; 
    popupContainer.appendChild(ethContainer);

    const ethPriceAndLogo = document.createElement('div');
    ethPriceAndLogo.classList.add('flex', 'gap-2', 'items-center');
    ethContainer.appendChild(ethPriceAndLogo);

    const ethLogo = document.createElement('img');
    ethLogo.classList.add('w-9');
    ethLogo.src = cryptoData[1].image;
    ethLogo.alt = 'ETH';
    ethPriceAndLogo.appendChild(ethLogo);

    const ethName = document.createElement('span');
    ethName.classList.add('text-slate-900', 'font-bold', 'text-2xl');
    ethName.textContent = cryptoData[1].name;
    ethPriceAndLogo.appendChild(ethName);

    const ethSymbol = document.createElement('span');
    ethSymbol.classList.add('text-slate-400', 'uppercase', 'text-xl');
    ethSymbol.textContent = cryptoData[1].symbol;
    ethPriceAndLogo.appendChild(ethSymbol);

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('text-2xl', 'absolute', 'top-2', 'right-2', 'font-bold', 'rounded-full', 'px-3','pb-2', 'bg-slate-500', 'hover:scale-110', 'transition', 'text-white');
    closeBtn.textContent = 'x';
    closeBtn.addEventListener('click', ()=>{
        popupContainer.classList.toggle('hidden');
    })
    ethPriceAndLogo.appendChild(closeBtn);

    const ethPrice = document.createElement('div');
    ethPrice.classList.add('text-slate-950', 'text-6xl', 'font-bold', 'mb-3');
    ethPrice.textContent = '$' + Number(cryptoData[1].current_price).toFixed(2).toLocaleString('en-US');
    ethContainer.appendChild(ethPrice);

    const ethMarketCapContainer = document.createElement('div');
    ethMarketCapContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    ethContainer.appendChild(ethMarketCapContainer);

    const ethMarketCap = document.createElement('span');
    ethMarketCap.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    ethMarketCap.textContent = 'Market Cap';
    ethMarketCapContainer.appendChild(ethMarketCap);

    const ethMarketCapPrice = document.createElement('span');
    ethMarketCapPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    ethMarketCapPrice.textContent = '$' + Number(cryptoData[1].market_cap).toLocaleString('en-US');
    ethMarketCapContainer.appendChild(ethMarketCapPrice);

    const ethFullyDilutedContainer = document.createElement('div');
    ethFullyDilutedContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    ethContainer.appendChild(ethFullyDilutedContainer);

    const ethFullyDiluted = document.createElement('span');
    ethFullyDiluted.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    ethFullyDiluted.textContent = 'Fully Diluted Valuation';
    ethFullyDilutedContainer.appendChild(ethFullyDiluted);

    const ethFullyDilutedPrice = document.createElement('span');
    ethFullyDilutedPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    ethFullyDilutedPrice.textContent = '$' + Number(cryptoData[1].fully_diluted_valuation).toLocaleString('en-US');
    ethFullyDilutedContainer.appendChild(ethFullyDilutedPrice);

    const ethTotalVolumeContainer = document.createElement('div');
    ethTotalVolumeContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    ethContainer.appendChild(ethTotalVolumeContainer);

    const ethTotalVolume = document.createElement('span');
    ethTotalVolume.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    ethTotalVolume.textContent = '24 Hour Trading Vol';
    ethTotalVolumeContainer.appendChild(ethTotalVolume);

    const ethTotalVolumePrice = document.createElement('span');
    ethTotalVolumePrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    ethTotalVolumePrice.textContent = '$' + Number(cryptoData[1].total_volume).toLocaleString('en-US');
    ethTotalVolumeContainer.appendChild(ethTotalVolumePrice);

    const ethCirculatingSupplyContainer = document.createElement('div');
    ethCirculatingSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    ethContainer.appendChild(ethCirculatingSupplyContainer);

    const ethCirculatingSupply = document.createElement('span');
    ethCirculatingSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    ethCirculatingSupply.textContent = 'Circulating Supply';
    ethCirculatingSupplyContainer.appendChild(ethCirculatingSupply);

    const ethCirculatingSupplyPrice = document.createElement('span');
    ethCirculatingSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    ethCirculatingSupplyPrice.textContent = Number(cryptoData[1].circulating_supply).toLocaleString('en-US');
    ethCirculatingSupplyContainer.appendChild(ethCirculatingSupplyPrice);

    const ethTotalSupplyContainer = document.createElement('div');
    ethTotalSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    ethContainer.appendChild(ethTotalSupplyContainer);

    const ethTotalSupply = document.createElement('span');
    ethTotalSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    ethTotalSupply.textContent = 'Total Supply';
    ethTotalSupplyContainer.appendChild(ethTotalSupply);

    const ethTotalSupplyPrice = document.createElement('span');
    ethTotalSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    ethTotalSupplyPrice.textContent = Number(cryptoData[1].total_supply).toLocaleString('en-US');
    ethTotalSupplyContainer.appendChild(ethTotalSupplyPrice);

    const ethMaxSupplyContainer = document.createElement('div');
    ethMaxSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    ethContainer.appendChild(ethMaxSupplyContainer);

    const ethMaxSupply = document.createElement('span');
    ethMaxSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    ethMaxSupply.textContent = 'Max Supply';
    ethMaxSupplyContainer.appendChild(ethMaxSupply);

    const ethMaxSupplyPrice = document.createElement('span');
    ethMaxSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    ethMaxSupplyPrice.textContent = Number(cryptoData[1].max_supply).toLocaleString('en-US');
    ethMaxSupplyContainer.appendChild(ethMaxSupplyPrice);
}

document.getElementById('eth').addEventListener('click', () => {
    if(cryptoData.length > 0){
        popupContainer.classList.toggle('hidden');
        ethPopUp(cryptoData);
    }else{
        alert('Loading.. click again');
    }
});


function bnbPopUp(cryptoData) {
    const bnbContainer = document.createElement('div');
    bnbContainer.classList.add('fixed', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'bg-white', 'p-4', 'border', 'border-gray-400', 'w-1/3', 'flex', 'flex-col', 'gap-3', 'rounded', 'xl:w-1/2', 'md:w-3/4', 'sm:w-full');
    popupContainer.innerHTML = ''; 
    popupContainer.appendChild(bnbContainer);

    const bnbPriceAndLogo = document.createElement('div');
    bnbPriceAndLogo.classList.add('flex', 'gap-2', 'items-center');
    bnbContainer.appendChild(bnbPriceAndLogo);

    const bnbLogo = document.createElement('img');
    bnbLogo.classList.add('w-9');
    bnbLogo.src = cryptoData[3].image;
    bnbLogo.alt = 'BNB';
    bnbPriceAndLogo.appendChild(bnbLogo);

    const bnbName = document.createElement('span');
    bnbName.classList.add('text-slate-900', 'font-bold', 'text-2xl');
    bnbName.textContent = cryptoData[3].name;
    bnbPriceAndLogo.appendChild(bnbName);

    const bnbSymbol = document.createElement('span');
    bnbSymbol.classList.add('text-slate-400', 'uppercase', 'text-xl');
    bnbSymbol.textContent = cryptoData[3].symbol;
    bnbPriceAndLogo.appendChild(bnbSymbol);

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('text-2xl', 'absolute', 'top-2', 'right-2', 'font-bold', 'rounded-full', 'px-3','pb-2', 'bg-slate-500', 'hover:scale-110', 'transition', 'text-white');
    closeBtn.textContent = 'x';
    closeBtn.addEventListener('click', ()=>{
        popupContainer.classList.toggle('hidden');
    })
    bnbPriceAndLogo.appendChild(closeBtn);

    const bnbPrice = document.createElement('div');
    bnbPrice.classList.add('text-slate-950', 'text-6xl', 'font-bold', 'mb-3');
    bnbPrice.textContent = '$' + Number(cryptoData[3].current_price).toFixed(2).toLocaleString('en-US');
    bnbContainer.appendChild(bnbPrice);

    const bnbMarketCapContainer = document.createElement('div');
    bnbMarketCapContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    bnbContainer.appendChild(bnbMarketCapContainer);

    const bnbMarketCap = document.createElement('span');
    bnbMarketCap.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    bnbMarketCap.textContent = 'Market Cap';
    bnbMarketCapContainer.appendChild(bnbMarketCap);

    const bnbMarketCapPrice = document.createElement('span');
    bnbMarketCapPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    bnbMarketCapPrice.textContent = '$' + Number(cryptoData[3].market_cap).toLocaleString('en-US');
    bnbMarketCapContainer.appendChild(bnbMarketCapPrice);

    const bnbFullyDilutedContainer = document.createElement('div');
    bnbFullyDilutedContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    bnbContainer.appendChild(bnbFullyDilutedContainer);

    const bnbFullyDiluted = document.createElement('span');
    bnbFullyDiluted.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    bnbFullyDiluted.textContent = 'Fully Diluted Valuation';
    bnbFullyDilutedContainer.appendChild(bnbFullyDiluted);

    const bnbFullyDilutedPrice = document.createElement('span');
    bnbFullyDilutedPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    bnbFullyDilutedPrice.textContent = '$' + Number(cryptoData[3].fully_diluted_valuation).toLocaleString('en-US');
    bnbFullyDilutedContainer.appendChild(bnbFullyDilutedPrice);

    const bnbTotalVolumeContainer = document.createElement('div');
    bnbTotalVolumeContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    bnbContainer.appendChild(bnbTotalVolumeContainer);

    const bnbTotalVolume = document.createElement('span');
    bnbTotalVolume.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    bnbTotalVolume.textContent = '24 Hour Trading Vol';
    bnbTotalVolumeContainer.appendChild(bnbTotalVolume);

    const bnbTotalVolumePrice = document.createElement('span');
    bnbTotalVolumePrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    bnbTotalVolumePrice.textContent = '$' + Number(cryptoData[3].total_volume).toLocaleString('en-US');
    bnbTotalVolumeContainer.appendChild(bnbTotalVolumePrice);

    const bnbCirculatingSupplyContainer = document.createElement('div');
    bnbCirculatingSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    bnbContainer.appendChild(bnbCirculatingSupplyContainer);

    const bnbCirculatingSupply = document.createElement('span');
    bnbCirculatingSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    bnbCirculatingSupply.textContent = 'Circulating Supply';
    bnbCirculatingSupplyContainer.appendChild(bnbCirculatingSupply);

    const bnbCirculatingSupplyPrice = document.createElement('span');
    bnbCirculatingSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    bnbCirculatingSupplyPrice.textContent = Number(cryptoData[3].circulating_supply).toLocaleString('en-US');
    bnbCirculatingSupplyContainer.appendChild(bnbCirculatingSupplyPrice);

    const bnbTotalSupplyContainer = document.createElement('div');
    bnbTotalSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    bnbContainer.appendChild(bnbTotalSupplyContainer);

    const bnbTotalSupply = document.createElement('span');
    bnbTotalSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    bnbTotalSupply.textContent = 'Total Supply';
    bnbTotalSupplyContainer.appendChild(bnbTotalSupply);

    const bnbTotalSupplyPrice = document.createElement('span');
    bnbTotalSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    bnbTotalSupplyPrice.textContent = Number(cryptoData[3].total_supply).toLocaleString('en-US');
    bnbTotalSupplyContainer.appendChild(bnbTotalSupplyPrice);

    const bnbMaxSupplyContainer = document.createElement('div');
    bnbMaxSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    bnbContainer.appendChild(bnbMaxSupplyContainer);

    const bnbMaxSupply = document.createElement('span');
    bnbMaxSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    bnbMaxSupply.textContent = 'Max Supply';
    bnbMaxSupplyContainer.appendChild(bnbMaxSupply);

    const bnbMaxSupplyPrice = document.createElement('span');
    bnbMaxSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    bnbMaxSupplyPrice.textContent = Number(cryptoData[3].max_supply).toLocaleString('en-US');
    bnbMaxSupplyContainer.appendChild(bnbMaxSupplyPrice);
}

document.getElementById('bnb').addEventListener('click', () => {
    if(cryptoData.length > 0){
        popupContainer.classList.toggle('hidden');
        bnbPopUp(cryptoData);
    }else{
        alert('Loading.. click again');
    }
});


function usdcPopUp(cryptoData) {
    const usdcContainer = document.createElement('div');
    usdcContainer.classList.add('fixed', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'bg-white', 'p-4', 'border', 'border-gray-400', 'w-1/3', 'flex', 'flex-col', 'gap-3', 'rounded', 'xl:w-1/2', 'md:w-3/4', 'sm:w-full');
    popupContainer.innerHTML = ''; 
    popupContainer.appendChild(usdcContainer);

    const usdcPriceAndLogo = document.createElement('div');
    usdcPriceAndLogo.classList.add('flex', 'gap-2', 'items-center');
    usdcContainer.appendChild(usdcPriceAndLogo);

    const usdcLogo = document.createElement('img');
    usdcLogo.classList.add('w-9');
    usdcLogo.src = cryptoData[5].image;
    usdcLogo.alt = 'USDC';
    usdcPriceAndLogo.appendChild(usdcLogo);

    const usdcName = document.createElement('span');
    usdcName.classList.add('text-slate-900', 'font-bold', 'text-2xl');
    usdcName.textContent = cryptoData[5].name;
    usdcPriceAndLogo.appendChild(usdcName);

    const usdcSymbol = document.createElement('span');
    usdcSymbol.classList.add('text-slate-400', 'uppercase', 'text-xl');
    usdcSymbol.textContent = cryptoData[5].symbol;
    usdcPriceAndLogo.appendChild(usdcSymbol);

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('text-2xl', 'absolute', 'top-2', 'right-2', 'font-bold', 'rounded-full', 'px-3','pb-2', 'bg-slate-500', 'hover:scale-110', 'transition', 'text-white');
    closeBtn.textContent = 'x';
    closeBtn.addEventListener('click', ()=>{
        popupContainer.classList.toggle('hidden');
    });
    usdcPriceAndLogo.appendChild(closeBtn);

    const usdcPrice = document.createElement('div');
    usdcPrice.classList.add('text-slate-950', 'text-6xl', 'font-bold', 'mb-3');
    usdcPrice.textContent = '$' + Number(cryptoData[5].current_price).toFixed(2).toLocaleString('en-US');
    usdcContainer.appendChild(usdcPrice);

    const usdcMarketCapContainer = document.createElement('div');
    usdcMarketCapContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    usdcContainer.appendChild(usdcMarketCapContainer);

    const usdcMarketCap = document.createElement('span');
    usdcMarketCap.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    usdcMarketCap.textContent = 'Market Cap';
    usdcMarketCapContainer.appendChild(usdcMarketCap);

    const usdcMarketCapPrice = document.createElement('span');
    usdcMarketCapPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    usdcMarketCapPrice.textContent = '$' + Number(cryptoData[5].market_cap).toLocaleString('en-US');
    usdcMarketCapContainer.appendChild(usdcMarketCapPrice);

    const usdcFullyDilutedContainer = document.createElement('div');
    usdcFullyDilutedContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    usdcContainer.appendChild(usdcFullyDilutedContainer);

    const usdcFullyDiluted = document.createElement('span');
    usdcFullyDiluted.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    usdcFullyDiluted.textContent = 'Fully Diluted Valuation';
    usdcFullyDilutedContainer.appendChild(usdcFullyDiluted);

    const usdcFullyDilutedPrice = document.createElement('span');
    usdcFullyDilutedPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    usdcFullyDilutedPrice.textContent = '$' + Number(cryptoData[5].fully_diluted_valuation).toLocaleString('en-US');
    usdcFullyDilutedContainer.appendChild(usdcFullyDilutedPrice);

    const usdcTotalVolumeContainer = document.createElement('div');
    usdcTotalVolumeContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    usdcContainer.appendChild(usdcTotalVolumeContainer);

    const usdcTotalVolume = document.createElement('span');
    usdcTotalVolume.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    usdcTotalVolume.textContent = '24 Hour Trading Vol';
    usdcTotalVolumeContainer.appendChild(usdcTotalVolume);

    const usdcTotalVolumePrice = document.createElement('span');
    usdcTotalVolumePrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    usdcTotalVolumePrice.textContent = '$' + Number(cryptoData[5].total_volume).toLocaleString('en-US');
    usdcTotalVolumeContainer.appendChild(usdcTotalVolumePrice);

    const usdcCirculatingSupplyContainer = document.createElement('div');
    usdcCirculatingSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    usdcContainer.appendChild(usdcCirculatingSupplyContainer);

    const usdcCirculatingSupply = document.createElement('span');
    usdcCirculatingSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    usdcCirculatingSupply.textContent = 'Circulating Supply';
    usdcCirculatingSupplyContainer.appendChild(usdcCirculatingSupply);

    const usdcCirculatingSupplyPrice = document.createElement('span');
    usdcCirculatingSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    usdcCirculatingSupplyPrice.textContent = Number(cryptoData[5].circulating_supply).toLocaleString('en-US');
    usdcCirculatingSupplyContainer.appendChild(usdcCirculatingSupplyPrice);

    const usdcTotalSupplyContainer = document.createElement('div');
    usdcTotalSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    usdcContainer.appendChild(usdcTotalSupplyContainer);

    const usdcTotalSupply = document.createElement('span');
    usdcTotalSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    usdcTotalSupply.textContent = 'Total Supply';
    usdcTotalSupplyContainer.appendChild(usdcTotalSupply);

    const usdcTotalSupplyPrice = document.createElement('span');
    usdcTotalSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    usdcTotalSupplyPrice.textContent = Number(cryptoData[5].total_supply).toLocaleString('en-US');
    usdcTotalSupplyContainer.appendChild(usdcTotalSupplyPrice);

    const usdcMaxSupplyContainer = document.createElement('div');
    usdcMaxSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    usdcContainer.appendChild(usdcMaxSupplyContainer);

    const usdcMaxSupply = document.createElement('span');
    usdcMaxSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    usdcMaxSupply.textContent = 'Max Supply';
    usdcMaxSupplyContainer.appendChild(usdcMaxSupply);

    const usdcMaxSupplyPrice = document.createElement('span');
    usdcMaxSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    usdcMaxSupplyPrice.textContent = Number(cryptoData[5].max_supply).toLocaleString('en-US');
    usdcMaxSupplyContainer.appendChild(usdcMaxSupplyPrice);
}

document.getElementById('usdc').addEventListener('click', () => {
    if(cryptoData.length > 0){
        popupContainer.classList.toggle('hidden');
        usdcPopUp(cryptoData);
    }else{
        alert('Loading.. click again');
    }
});


function xrpPopUp(cryptoData) {
    const xrpContainer = document.createElement('div');
    xrpContainer.classList.add('fixed', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'bg-white', 'p-4', 'border', 'border-gray-400', 'w-1/3', 'flex', 'flex-col', 'gap-3', 'rounded', 'xl:w-1/2', 'md:w-3/4', 'sm:w-full');
    popupContainer.innerHTML = ''; 
    popupContainer.appendChild(xrpContainer);

    const xrpPriceAndLogo = document.createElement('div');
    xrpPriceAndLogo.classList.add('flex', 'gap-2', 'items-center');
    xrpContainer.appendChild(xrpPriceAndLogo);

    const xrpLogo = document.createElement('img');
    xrpLogo.classList.add('w-9');
    xrpLogo.src = cryptoData[6].image;
    xrpLogo.alt = 'XRP';
    xrpPriceAndLogo.appendChild(xrpLogo);

    const xrpName = document.createElement('span');
    xrpName.classList.add('text-slate-900', 'font-bold', 'text-2xl');
    xrpName.textContent = cryptoData[6].name;
    xrpPriceAndLogo.appendChild(xrpName);

    const xrpSymbol = document.createElement('span');
    xrpSymbol.classList.add('text-slate-400', 'uppercase', 'text-xl');
    xrpSymbol.textContent = cryptoData[6].symbol;
    xrpPriceAndLogo.appendChild(xrpSymbol);

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('text-2xl', 'absolute', 'top-2', 'right-2', 'font-bold', 'rounded-full', 'px-3','pb-2', 'bg-slate-500', 'hover:scale-110', 'transition', 'text-white');
    closeBtn.textContent = 'x';
    closeBtn.addEventListener('click', ()=>{
        popupContainer.classList.toggle('hidden');
    });
    xrpPriceAndLogo.appendChild(closeBtn);

    const xrpPrice = document.createElement('div');
    xrpPrice.classList.add('text-slate-950', 'text-6xl', 'font-bold', 'mb-3');
    xrpPrice.textContent = '$' + Number(cryptoData[6].current_price).toFixed(4).toLocaleString('en-US');
    xrpContainer.appendChild(xrpPrice);

    const xrpMarketCapContainer = document.createElement('div');
    xrpMarketCapContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    xrpContainer.appendChild(xrpMarketCapContainer);

    const xrpMarketCap = document.createElement('span');
    xrpMarketCap.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    xrpMarketCap.textContent = 'Market Cap';
    xrpMarketCapContainer.appendChild(xrpMarketCap);

    const xrpMarketCapPrice = document.createElement('span');
    xrpMarketCapPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    xrpMarketCapPrice.textContent = '$' + Number(cryptoData[6].market_cap).toLocaleString('en-US');
    xrpMarketCapContainer.appendChild(xrpMarketCapPrice);

    const xrpFullyDilutedContainer = document.createElement('div');
    xrpFullyDilutedContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    xrpContainer.appendChild(xrpFullyDilutedContainer);

    const xrpFullyDiluted = document.createElement('span');
    xrpFullyDiluted.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    xrpFullyDiluted.textContent = 'Fully Diluted Valuation';
    xrpFullyDilutedContainer.appendChild(xrpFullyDiluted);

    const xrpFullyDilutedPrice = document.createElement('span');
    xrpFullyDilutedPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    xrpFullyDilutedPrice.textContent = '$' + Number(cryptoData[6].fully_diluted_valuation).toLocaleString('en-US');
    xrpFullyDilutedContainer.appendChild(xrpFullyDilutedPrice);

    const xrpTotalVolumeContainer = document.createElement('div');
    xrpTotalVolumeContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    xrpContainer.appendChild(xrpTotalVolumeContainer);

    const xrpTotalVolume = document.createElement('span');
    xrpTotalVolume.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    xrpTotalVolume.textContent = '24 Hour Trading Vol';
    xrpTotalVolumeContainer.appendChild(xrpTotalVolume);

    const xrpTotalVolumePrice = document.createElement('span');
    xrpTotalVolumePrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    xrpTotalVolumePrice.textContent = '$' + Number(cryptoData[6].total_volume).toLocaleString('en-US');
    xrpTotalVolumeContainer.appendChild(xrpTotalVolumePrice);

    const xrpCirculatingSupplyContainer = document.createElement('div');
    xrpCirculatingSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    xrpContainer.appendChild(xrpCirculatingSupplyContainer);

    const xrpCirculatingSupply = document.createElement('span');
    xrpCirculatingSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    xrpCirculatingSupply.textContent = 'Circulating Supply';
    xrpCirculatingSupplyContainer.appendChild(xrpCirculatingSupply);

    const xrpCirculatingSupplyPrice = document.createElement('span');
    xrpCirculatingSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    xrpCirculatingSupplyPrice.textContent = Number(cryptoData[6].circulating_supply).toLocaleString('en-US');
    xrpCirculatingSupplyContainer.appendChild(xrpCirculatingSupplyPrice);

    const xrpTotalSupplyContainer = document.createElement('div');
    xrpTotalSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    xrpContainer.appendChild(xrpTotalSupplyContainer);

    const xrpTotalSupply = document.createElement('span');
    xrpTotalSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    xrpTotalSupply.textContent = 'Total Supply';
    xrpTotalSupplyContainer.appendChild(xrpTotalSupply);

    const xrpTotalSupplyPrice = document.createElement('span');
    xrpTotalSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    xrpTotalSupplyPrice.textContent = Number(cryptoData[6].total_supply).toLocaleString('en-US');
    xrpTotalSupplyContainer.appendChild(xrpTotalSupplyPrice);

    const xrpMaxSupplyContainer = document.createElement('div');
    xrpMaxSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    xrpContainer.appendChild(xrpMaxSupplyContainer);

    const xrpMaxSupply = document.createElement('span');
    xrpMaxSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    xrpMaxSupply.textContent = 'Max Supply';
    xrpMaxSupplyContainer.appendChild(xrpMaxSupply);

    const xrpMaxSupplyPrice = document.createElement('span');
    xrpMaxSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    xrpMaxSupplyPrice.textContent = Number(cryptoData[6].max_supply).toLocaleString('en-US');
    xrpMaxSupplyContainer.appendChild(xrpMaxSupplyPrice);
}

document.getElementById('xrp').addEventListener('click', () => {
    if(cryptoData.length > 0){
        popupContainer.classList.toggle('hidden');
        xrpPopUp(cryptoData);
    }else{
        alert('Loading.. click again');
    }
});


function cardanoPopUp(cryptoData) {
    const cardanoContainer = document.createElement('div');
    cardanoContainer.classList.add('fixed', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'bg-white', 'p-4', 'border', 'border-gray-400', 'w-1/3', 'flex', 'flex-col', 'gap-3', 'rounded', 'xl:w-1/2', 'md:w-3/4', 'sm:w-full');
    popupContainer.innerHTML = ''; 
    popupContainer.appendChild(cardanoContainer);

    const cardanoPriceAndLogo = document.createElement('div');
    cardanoPriceAndLogo.classList.add('flex', 'gap-2', 'items-center');
    cardanoContainer.appendChild(cardanoPriceAndLogo);

    const cardanoLogo = document.createElement('img');
    cardanoLogo.classList.add('w-9');
    cardanoLogo.src = cryptoData[11].image;
    cardanoLogo.alt = 'Cardano';
    cardanoPriceAndLogo.appendChild(cardanoLogo);

    const cardanoName = document.createElement('span');
    cardanoName.classList.add('text-slate-900', 'font-bold', 'text-2xl');
    cardanoName.textContent = cryptoData[11].name;
    cardanoPriceAndLogo.appendChild(cardanoName);

    const cardanoSymbol = document.createElement('span');
    cardanoSymbol.classList.add('text-slate-400', 'uppercase', 'text-xl');
    cardanoSymbol.textContent = cryptoData[11].symbol;
    cardanoPriceAndLogo.appendChild(cardanoSymbol);

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('text-2xl', 'absolute', 'top-2', 'right-2', 'font-bold', 'rounded-full', 'px-3','pb-2', 'bg-slate-500', 'hover:scale-110', 'transition', 'text-white');
    closeBtn.textContent = 'x';
    closeBtn.addEventListener('click', ()=>{
        popupContainer.classList.toggle('hidden');
    });
    cardanoPriceAndLogo.appendChild(closeBtn);

    const cardanoPrice = document.createElement('div');
    cardanoPrice.classList.add('text-slate-950', 'text-6xl', 'font-bold', 'mb-3');
    cardanoPrice.textContent = '$' + Number(cryptoData[11].current_price).toFixed(4).toLocaleString('en-US');
    cardanoContainer.appendChild(cardanoPrice);

    const cardanoMarketCapContainer = document.createElement('div');
    cardanoMarketCapContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    cardanoContainer.appendChild(cardanoMarketCapContainer);

    const cardanoMarketCap = document.createElement('span');
    cardanoMarketCap.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    cardanoMarketCap.textContent = 'Market Cap';
    cardanoMarketCapContainer.appendChild(cardanoMarketCap);

    const cardanoMarketCapPrice = document.createElement('span');
    cardanoMarketCapPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    cardanoMarketCapPrice.textContent = '$' + Number(cryptoData[11].market_cap).toLocaleString('en-US');
    cardanoMarketCapContainer.appendChild(cardanoMarketCapPrice);

    const cardanoFullyDilutedContainer = document.createElement('div');
    cardanoFullyDilutedContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    cardanoContainer.appendChild(cardanoFullyDilutedContainer);

    const cardanoFullyDiluted = document.createElement('span');
    cardanoFullyDiluted.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    cardanoFullyDiluted.textContent = 'Fully Diluted Valuation';
    cardanoFullyDilutedContainer.appendChild(cardanoFullyDiluted);

    const cardanoFullyDilutedPrice = document.createElement('span');
    cardanoFullyDilutedPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    cardanoFullyDilutedPrice.textContent = '$' + Number(cryptoData[11].fully_diluted_valuation).toLocaleString('en-US');
    cardanoFullyDilutedContainer.appendChild(cardanoFullyDilutedPrice);

    const cardanoTotalVolumeContainer = document.createElement('div');
    cardanoTotalVolumeContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    cardanoContainer.appendChild(cardanoTotalVolumeContainer);

    const cardanoTotalVolume = document.createElement('span');
    cardanoTotalVolume.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    cardanoTotalVolume.textContent = '24 Hour Trading Vol';
    cardanoTotalVolumeContainer.appendChild(cardanoTotalVolume);

    const cardanoTotalVolumePrice = document.createElement('span');
    cardanoTotalVolumePrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    cardanoTotalVolumePrice.textContent = '$' + Number(cryptoData[11].total_volume).toLocaleString('en-US');
    cardanoTotalVolumeContainer.appendChild(cardanoTotalVolumePrice);

    const cardanoCirculatingSupplyContainer = document.createElement('div');
    cardanoCirculatingSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    cardanoContainer.appendChild(cardanoCirculatingSupplyContainer);

    const cardanoCirculatingSupply = document.createElement('span');
    cardanoCirculatingSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    cardanoCirculatingSupply.textContent = 'Circulating Supply';
    cardanoCirculatingSupplyContainer.appendChild(cardanoCirculatingSupply);

    const cardanoCirculatingSupplyPrice = document.createElement('span');
    cardanoCirculatingSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    cardanoCirculatingSupplyPrice.textContent = Number(cryptoData[11].circulating_supply).toLocaleString('en-US');
    cardanoCirculatingSupplyContainer.appendChild(cardanoCirculatingSupplyPrice);

    const cardanoTotalSupplyContainer = document.createElement('div');
    cardanoTotalSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    cardanoContainer.appendChild(cardanoTotalSupplyContainer);

    const cardanoTotalSupply = document.createElement('span');
    cardanoTotalSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    cardanoTotalSupply.textContent = 'Total Supply';
    cardanoTotalSupplyContainer.appendChild(cardanoTotalSupply);

    const cardanoTotalSupplyPrice = document.createElement('span');
    cardanoTotalSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    cardanoTotalSupplyPrice.textContent = Number(cryptoData[11].total_supply).toLocaleString('en-US');
    cardanoTotalSupplyContainer.appendChild(cardanoTotalSupplyPrice);

    const cardanoMaxSupplyContainer = document.createElement('div');
    cardanoMaxSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    cardanoContainer.appendChild(cardanoMaxSupplyContainer);

    const cardanoMaxSupply = document.createElement('span');
    cardanoMaxSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    cardanoMaxSupply.textContent = 'Max Supply';
    cardanoMaxSupplyContainer.appendChild(cardanoMaxSupply);

    const cardanoMaxSupplyPrice = document.createElement('span');
    cardanoMaxSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    cardanoMaxSupplyPrice.textContent = Number(cryptoData[11].max_supply).toLocaleString('en-US');
    cardanoMaxSupplyContainer.appendChild(cardanoMaxSupplyPrice);
}

document.getElementById('cardano').addEventListener('click', () => {
    if(cryptoData.length > 0){
        popupContainer.classList.toggle('hidden');
        cardanoPopUp(cryptoData);
    }else{
        alert('Loading.. click again');
    }
});



function solanaPopUp(cryptoData) {
    const solanaContainer = document.createElement('div');
    solanaContainer.classList.add('fixed', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'bg-white', 'p-4', 'border', 'border-gray-400', 'w-1/3', 'flex', 'flex-col', 'gap-3', 'rounded', 'xl:w-1/2', 'md:w-3/4', 'sm:w-full');
    popupContainer.innerHTML = ''; 
    popupContainer.appendChild(solanaContainer);

    const solanaPriceAndLogo = document.createElement('div');
    solanaPriceAndLogo.classList.add('flex', 'gap-2', 'items-center');
    solanaContainer.appendChild(solanaPriceAndLogo);

    const solanaLogo = document.createElement('img');
    solanaLogo.classList.add('w-9');
    solanaLogo.src = cryptoData[4].image;
    solanaLogo.alt = 'Solana';
    solanaPriceAndLogo.appendChild(solanaLogo);

    const solanaName = document.createElement('span');
    solanaName.classList.add('text-slate-900', 'font-bold', 'text-2xl');
    solanaName.textContent = cryptoData[4].name;
    solanaPriceAndLogo.appendChild(solanaName);

    const solanaSymbol = document.createElement('span');
    solanaSymbol.classList.add('text-slate-400', 'uppercase', 'text-xl');
    solanaSymbol.textContent = cryptoData[4].symbol;
    solanaPriceAndLogo.appendChild(solanaSymbol);

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('text-2xl', 'absolute', 'top-2', 'right-2', 'font-bold', 'rounded-full', 'px-3','pb-2', 'bg-slate-500', 'hover:scale-110', 'transition', 'text-white');
    closeBtn.textContent = 'x';
    closeBtn.addEventListener('click', ()=>{
        popupContainer.classList.toggle('hidden');
    });
    solanaPriceAndLogo.appendChild(closeBtn);

    const solanaPrice = document.createElement('div');
    solanaPrice.classList.add('text-slate-950', 'text-6xl', 'font-bold', 'mb-3');
    solanaPrice.textContent = '$' + Number(cryptoData[4].current_price).toFixed(2).toLocaleString('en-US');
    solanaContainer.appendChild(solanaPrice);

    const solanaMarketCapContainer = document.createElement('div');
    solanaMarketCapContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    solanaContainer.appendChild(solanaMarketCapContainer);

    const solanaMarketCap = document.createElement('span');
    solanaMarketCap.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    solanaMarketCap.textContent = 'Market Cap';
    solanaMarketCapContainer.appendChild(solanaMarketCap);

    const solanaMarketCapPrice = document.createElement('span');
    solanaMarketCapPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    solanaMarketCapPrice.textContent = '$' + Number(cryptoData[4].market_cap).toLocaleString('en-US');
    solanaMarketCapContainer.appendChild(solanaMarketCapPrice);

    const solanaFullyDilutedContainer = document.createElement('div');
    solanaFullyDilutedContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    solanaContainer.appendChild(solanaFullyDilutedContainer);

    const solanaFullyDiluted = document.createElement('span');
    solanaFullyDiluted.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    solanaFullyDiluted.textContent = 'Fully Diluted Valuation';
    solanaFullyDilutedContainer.appendChild(solanaFullyDiluted);

    const solanaFullyDilutedPrice = document.createElement('span');
    solanaFullyDilutedPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    solanaFullyDilutedPrice.textContent = '$' + Number(cryptoData[4].fully_diluted_valuation).toLocaleString('en-US');
    solanaFullyDilutedContainer.appendChild(solanaFullyDilutedPrice);

    const solanaTotalVolumeContainer = document.createElement('div');
    solanaTotalVolumeContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    solanaContainer.appendChild(solanaTotalVolumeContainer);

    const solanaTotalVolume = document.createElement('span');
    solanaTotalVolume.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    solanaTotalVolume.textContent = '24 Hour Trading Vol';
    solanaTotalVolumeContainer.appendChild(solanaTotalVolume);

    const solanaTotalVolumePrice = document.createElement('span');
    solanaTotalVolumePrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    solanaTotalVolumePrice.textContent = '$' + Number(cryptoData[4].total_volume).toLocaleString('en-US');
    solanaTotalVolumeContainer.appendChild(solanaTotalVolumePrice);

    const solanaCirculatingSupplyContainer = document.createElement('div');
    solanaCirculatingSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    solanaContainer.appendChild(solanaCirculatingSupplyContainer);

    const solanaCirculatingSupply = document.createElement('span');
    solanaCirculatingSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    solanaCirculatingSupply.textContent = 'Circulating Supply';
    solanaCirculatingSupplyContainer.appendChild(solanaCirculatingSupply);

    const solanaCirculatingSupplyPrice = document.createElement('span');
    solanaCirculatingSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    solanaCirculatingSupplyPrice.textContent = Number(cryptoData[4].circulating_supply).toLocaleString('en-US');
    solanaCirculatingSupplyContainer.appendChild(solanaCirculatingSupplyPrice);

    const solanaTotalSupplyContainer = document.createElement('div');
    solanaTotalSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    solanaContainer.appendChild(solanaTotalSupplyContainer);

    const solanaTotalSupply = document.createElement('span');
    solanaTotalSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    solanaTotalSupply.textContent = 'Total Supply';
    solanaTotalSupplyContainer.appendChild(solanaTotalSupply);

    const solanaTotalSupplyPrice = document.createElement('span');
    solanaTotalSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    solanaTotalSupplyPrice.textContent = Number(cryptoData[4].total_supply).toLocaleString('en-US');
    solanaTotalSupplyContainer.appendChild(solanaTotalSupplyPrice);

    const solanaMaxSupplyContainer = document.createElement('div');
    solanaMaxSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    solanaContainer.appendChild(solanaMaxSupplyContainer);

    const solanaMaxSupply = document.createElement('span');
    solanaMaxSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    solanaMaxSupply.textContent = 'Max Supply';
    solanaMaxSupplyContainer.appendChild(solanaMaxSupply);

    const solanaMaxSupplyPrice = document.createElement('span');
    solanaMaxSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    solanaMaxSupplyPrice.textContent = Number(cryptoData[4].max_supply).toLocaleString('en-US');
    solanaMaxSupplyContainer.appendChild(solanaMaxSupplyPrice);
}


document.getElementById('solana').addEventListener('click', () => {
    if(cryptoData.length > 0){
        popupContainer.classList.toggle('hidden');
        solanaPopUp(cryptoData);
    }else{
        alert('Loading.. click again');
    }
});


function polkadotPopUp(cryptoData) {
    const polkadotContainer = document.createElement('div');
    polkadotContainer.classList.add('fixed', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'bg-white', 'p-4', 'border', 'border-gray-400', 'w-1/3', 'flex', 'flex-col', 'gap-3', 'rounded', 'xl:w-1/2', 'md:w-3/4', 'sm:w-full');
    popupContainer.innerHTML = ''; 
    popupContainer.appendChild(polkadotContainer);

    const polkadotPriceAndLogo = document.createElement('div');
    polkadotPriceAndLogo.classList.add('flex', 'gap-2', 'items-center');
    polkadotContainer.appendChild(polkadotPriceAndLogo);

    const polkadotLogo = document.createElement('img');
    polkadotLogo.classList.add('w-9');
    polkadotLogo.src = cryptoData[18].image;
    polkadotLogo.alt = 'Polkadot';
    polkadotPriceAndLogo.appendChild(polkadotLogo);

    const polkadotName = document.createElement('span');
    polkadotName.classList.add('text-slate-900', 'font-bold', 'text-2xl');
    polkadotName.textContent = cryptoData[18].name;
    polkadotPriceAndLogo.appendChild(polkadotName);

    const polkadotSymbol = document.createElement('span');
    polkadotSymbol.classList.add('text-slate-400', 'uppercase', 'text-xl');
    polkadotSymbol.textContent = cryptoData[18].symbol;
    polkadotPriceAndLogo.appendChild(polkadotSymbol);

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('text-2xl', 'absolute', 'top-2', 'right-2', 'font-bold', 'rounded-full', 'px-3','pb-2', 'bg-slate-500', 'hover:scale-110', 'transition', 'text-white');
    closeBtn.textContent = 'x';
    closeBtn.addEventListener('click', ()=>{
        popupContainer.classList.toggle('hidden');
    });
    polkadotPriceAndLogo.appendChild(closeBtn);

    const polkadotPrice = document.createElement('div');
    polkadotPrice.classList.add('text-slate-950', 'text-6xl', 'font-bold', 'mb-3');
    polkadotPrice.textContent = '$' + Number(cryptoData[18].current_price).toFixed(2).toLocaleString('en-US');
    polkadotContainer.appendChild(polkadotPrice);

    const polkadotMarketCapContainer = document.createElement('div');
    polkadotMarketCapContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    polkadotContainer.appendChild(polkadotMarketCapContainer);

    const polkadotMarketCap = document.createElement('span');
    polkadotMarketCap.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    polkadotMarketCap.textContent = 'Market Cap';
    polkadotMarketCapContainer.appendChild(polkadotMarketCap);

    const polkadotMarketCapPrice = document.createElement('span');
    polkadotMarketCapPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    polkadotMarketCapPrice.textContent = '$' + Number(cryptoData[18].market_cap).toLocaleString('en-US');
    polkadotMarketCapContainer.appendChild(polkadotMarketCapPrice);

    const polkadotFullyDilutedContainer = document.createElement('div');
    polkadotFullyDilutedContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    polkadotContainer.appendChild(polkadotFullyDilutedContainer);

    const polkadotFullyDiluted = document.createElement('span');
    polkadotFullyDiluted.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    polkadotFullyDiluted.textContent = 'Fully Diluted Valuation';
    polkadotFullyDilutedContainer.appendChild(polkadotFullyDiluted);

    const polkadotFullyDilutedPrice = document.createElement('span');
    polkadotFullyDilutedPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    polkadotFullyDilutedPrice.textContent = '$' + Number(cryptoData[18].fully_diluted_valuation).toLocaleString('en-US');
    polkadotFullyDilutedContainer.appendChild(polkadotFullyDilutedPrice);

    const polkadotTotalVolumeContainer = document.createElement('div');
    polkadotTotalVolumeContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    polkadotContainer.appendChild(polkadotTotalVolumeContainer);

    const polkadotTotalVolume = document.createElement('span');
    polkadotTotalVolume.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    polkadotTotalVolume.textContent = '24 Hour Trading Vol';
    polkadotTotalVolumeContainer.appendChild(polkadotTotalVolume);

    const polkadotTotalVolumePrice = document.createElement('span');
    polkadotTotalVolumePrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    polkadotTotalVolumePrice.textContent = '$' + Number(cryptoData[18].total_volume).toLocaleString('en-US');
    polkadotTotalVolumeContainer.appendChild(polkadotTotalVolumePrice);

    const polkadotCirculatingSupplyContainer = document.createElement('div');
    polkadotCirculatingSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    polkadotContainer.appendChild(polkadotCirculatingSupplyContainer);

    const polkadotCirculatingSupply = document.createElement('span');
    polkadotCirculatingSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    polkadotCirculatingSupply.textContent = 'Circulating Supply';
    polkadotCirculatingSupplyContainer.appendChild(polkadotCirculatingSupply);

    const polkadotCirculatingSupplyPrice = document.createElement('span');
    polkadotCirculatingSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    polkadotCirculatingSupplyPrice.textContent = Number(cryptoData[18].circulating_supply).toLocaleString('en-US');
    polkadotCirculatingSupplyContainer.appendChild(polkadotCirculatingSupplyPrice);

    const polkadotTotalSupplyContainer = document.createElement('div');
    polkadotTotalSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    polkadotContainer.appendChild(polkadotTotalSupplyContainer);

    const polkadotTotalSupply = document.createElement('span');
    polkadotTotalSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    polkadotTotalSupply.textContent = 'Total Supply';
    polkadotTotalSupplyContainer.appendChild(polkadotTotalSupply);

    const polkadotTotalSupplyPrice = document.createElement('span');
    polkadotTotalSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    polkadotTotalSupplyPrice.textContent = Number(cryptoData[18].total_supply).toLocaleString('en-US');
    polkadotTotalSupplyContainer.appendChild(polkadotTotalSupplyPrice);

    const polkadotMaxSupplyContainer = document.createElement('div');
    polkadotMaxSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    polkadotContainer.appendChild(polkadotMaxSupplyContainer);

    const polkadotMaxSupply = document.createElement('span');
    polkadotMaxSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    polkadotMaxSupply.textContent = 'Max Supply';
    polkadotMaxSupplyContainer.appendChild(polkadotMaxSupply);

    const polkadotMaxSupplyPrice = document.createElement('span');
    polkadotMaxSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    polkadotMaxSupplyPrice.textContent = Number(cryptoData[18].max_supply).toLocaleString('en-US');
    polkadotMaxSupplyContainer.appendChild(polkadotMaxSupplyPrice);
}

document.getElementById('polkadot').addEventListener('click', () => {
    if(cryptoData.length > 0){
        popupContainer.classList.toggle('hidden');
        polkadotPopUp(cryptoData);
    }else{
        alert('Loading.. click again');
    }
});



function dogePopUp(cryptoData) {
    const dogeContainer = document.createElement('div');
    dogeContainer.classList.add('fixed', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'bg-white', 'p-4', 'border', 'border-gray-400', 'w-1/3', 'flex', 'flex-col', 'gap-3', 'rounded', 'xl:w-1/2', 'md:w-3/4', 'sm:w-full');
    popupContainer.innerHTML = ''; 
    popupContainer.appendChild(dogeContainer);

    const dogePriceAndLogo = document.createElement('div');
    dogePriceAndLogo.classList.add('flex', 'gap-2', 'items-center');
    dogeContainer.appendChild(dogePriceAndLogo);

    const dogeLogo = document.createElement('img');
    dogeLogo.classList.add('w-9');
    dogeLogo.src = cryptoData[9].image;
    dogeLogo.alt = 'Doge';
    dogePriceAndLogo.appendChild(dogeLogo);

    const dogeName = document.createElement('span');
    dogeName.classList.add('text-slate-900', 'font-bold', 'text-2xl');
    dogeName.textContent = cryptoData[9].name;
    dogePriceAndLogo.appendChild(dogeName);

    const dogeSymbol = document.createElement('span');
    dogeSymbol.classList.add('text-slate-400', 'uppercase', 'text-xl');
    dogeSymbol.textContent = cryptoData[9].symbol;
    dogePriceAndLogo.appendChild(dogeSymbol);

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('text-2xl', 'absolute', 'top-2', 'right-2', 'font-bold', 'rounded-full', 'px-3','pb-2', 'bg-slate-500', 'hover:scale-110', 'transition', 'text-white');
    closeBtn.textContent = 'x';
    closeBtn.addEventListener('click', ()=>{
        popupContainer.classList.toggle('hidden');
    });
    dogePriceAndLogo.appendChild(closeBtn);

    const dogePrice = document.createElement('div');
    dogePrice.classList.add('text-slate-950', 'text-6xl', 'font-bold', 'mb-3');
    dogePrice.textContent = '$' + Number(cryptoData[9].current_price).toFixed(4).toLocaleString('en-US');
    dogeContainer.appendChild(dogePrice);

    const dogeMarketCapContainer = document.createElement('div');
    dogeMarketCapContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    dogeContainer.appendChild(dogeMarketCapContainer);

    const dogeMarketCap = document.createElement('span');
    dogeMarketCap.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    dogeMarketCap.textContent = 'Market Cap';
    dogeMarketCapContainer.appendChild(dogeMarketCap);

    const dogeMarketCapPrice = document.createElement('span');
    dogeMarketCapPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    dogeMarketCapPrice.textContent = '$' + Number(cryptoData[9].market_cap).toLocaleString('en-US');
    dogeMarketCapContainer.appendChild(dogeMarketCapPrice);

    const dogeFullyDilutedContainer = document.createElement('div');
    dogeFullyDilutedContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    dogeContainer.appendChild(dogeFullyDilutedContainer);

    const dogeFullyDiluted = document.createElement('span');
    dogeFullyDiluted.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    dogeFullyDiluted.textContent = 'Fully Diluted Valuation';
    dogeFullyDilutedContainer.appendChild(dogeFullyDiluted);

    const dogeFullyDilutedPrice = document.createElement('span');
    dogeFullyDilutedPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    dogeFullyDilutedPrice.textContent = '$' + Number(cryptoData[9].fully_diluted_valuation).toLocaleString('en-US');
    dogeFullyDilutedContainer.appendChild(dogeFullyDilutedPrice);

    const dogeTotalVolumeContainer = document.createElement('div');
    dogeTotalVolumeContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    dogeContainer.appendChild(dogeTotalVolumeContainer);

    const dogeTotalVolume = document.createElement('span');
    dogeTotalVolume.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    dogeTotalVolume.textContent = '24 Hour Trading Vol';
    dogeTotalVolumeContainer.appendChild(dogeTotalVolume);

    const dogeTotalVolumePrice = document.createElement('span');
    dogeTotalVolumePrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    dogeTotalVolumePrice.textContent = '$' + Number(cryptoData[9].total_volume).toLocaleString('en-US');
    dogeTotalVolumeContainer.appendChild(dogeTotalVolumePrice);

    const dogeCirculatingSupplyContainer = document.createElement('div');
    dogeCirculatingSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    dogeContainer.appendChild(dogeCirculatingSupplyContainer);

    const dogeCirculatingSupply = document.createElement('span');
    dogeCirculatingSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    dogeCirculatingSupply.textContent = 'Circulating Supply';
    dogeCirculatingSupplyContainer.appendChild(dogeCirculatingSupply);

    const dogeCirculatingSupplyPrice = document.createElement('span');
    dogeCirculatingSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    dogeCirculatingSupplyPrice.textContent = Number(cryptoData[9].circulating_supply).toLocaleString('en-US');
    dogeCirculatingSupplyContainer.appendChild(dogeCirculatingSupplyPrice);

    const dogeTotalSupplyContainer = document.createElement('div');
    dogeTotalSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    dogeContainer.appendChild(dogeTotalSupplyContainer);

    const dogeTotalSupply = document.createElement('span');
    dogeTotalSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    dogeTotalSupply.textContent = 'Total Supply';
    dogeTotalSupplyContainer.appendChild(dogeTotalSupply);

    const dogeTotalSupplyPrice = document.createElement('span');
    dogeTotalSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    dogeTotalSupplyPrice.textContent = Number(cryptoData[9].total_supply).toLocaleString('en-US');
    dogeTotalSupplyContainer.appendChild(dogeTotalSupplyPrice);

    const dogeMaxSupplyContainer = document.createElement('div');
    dogeMaxSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    dogeContainer.appendChild(dogeMaxSupplyContainer);

    const dogeMaxSupply = document.createElement('span');
    dogeMaxSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    dogeMaxSupply.textContent = 'Max Supply';
    dogeMaxSupplyContainer.appendChild(dogeMaxSupply);

    const dogeMaxSupplyPrice = document.createElement('span');
    dogeMaxSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    dogeMaxSupplyPrice.textContent = Number(cryptoData[9].max_supply).toLocaleString('en-US');
    dogeMaxSupplyContainer.appendChild(dogeMaxSupplyPrice);
}

document.getElementById('doge').addEventListener('click', () => {
    if(cryptoData.length > 0){
        popupContainer.classList.toggle('hidden');
        dogePopUp(cryptoData);
    }else{
        alert('Loading.. click again');
    }
});



function litecoinPopUp(cryptoData) {
    const litecoinContainer = document.createElement('div');
    litecoinContainer.classList.add('fixed', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'bg-white', 'p-4', 'border', 'border-gray-400', 'w-1/3', 'flex', 'flex-col', 'gap-3', 'rounded', 'xl:w-1/2', 'md:w-3/4', 'sm:w-full');
    popupContainer.innerHTML = ''; 
    popupContainer.appendChild(litecoinContainer);

    const litecoinPriceAndLogo = document.createElement('div');
    litecoinPriceAndLogo.classList.add('flex', 'gap-2', 'items-center');
    litecoinContainer.appendChild(litecoinPriceAndLogo);

    const litecoinLogo = document.createElement('img');
    litecoinLogo.classList.add('w-9');
    litecoinLogo.src = cryptoData[22].image;
    litecoinLogo.alt = 'Litecoin';
    litecoinPriceAndLogo.appendChild(litecoinLogo);

    const litecoinName = document.createElement('span');
    litecoinName.classList.add('text-slate-900', 'font-bold', 'text-2xl');
    litecoinName.textContent = cryptoData[22].name;
    litecoinPriceAndLogo.appendChild(litecoinName);

    const litecoinSymbol = document.createElement('span');
    litecoinSymbol.classList.add('text-slate-400', 'uppercase', 'text-xl');
    litecoinSymbol.textContent = cryptoData[22].symbol;
    litecoinPriceAndLogo.appendChild(litecoinSymbol);

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('text-2xl', 'absolute', 'top-2', 'right-2', 'font-bold', 'rounded-full', 'px-3','pb-2', 'bg-slate-500', 'hover:scale-110', 'transition', 'text-white');
    closeBtn.textContent = 'x';
    closeBtn.addEventListener('click', ()=>{
        popupContainer.classList.toggle('hidden');
    });
    litecoinPriceAndLogo.appendChild(closeBtn);

    const litecoinPrice = document.createElement('div');
    litecoinPrice.classList.add('text-slate-950', 'text-6xl', 'font-bold', 'mb-3');
    litecoinPrice.textContent = '$' + Number(cryptoData[22].current_price).toFixed(2).toLocaleString('en-US');
    litecoinContainer.appendChild(litecoinPrice);

    const litecoinMarketCapContainer = document.createElement('div');
    litecoinMarketCapContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    litecoinContainer.appendChild(litecoinMarketCapContainer);

    const litecoinMarketCap = document.createElement('span');
    litecoinMarketCap.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    litecoinMarketCap.textContent = 'Market Cap';
    litecoinMarketCapContainer.appendChild(litecoinMarketCap);

    const litecoinMarketCapPrice = document.createElement('span');
    litecoinMarketCapPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    litecoinMarketCapPrice.textContent = '$' + Number(cryptoData[22].market_cap).toLocaleString('en-US');
    litecoinMarketCapContainer.appendChild(litecoinMarketCapPrice);

    const litecoinFullyDilutedContainer = document.createElement('div');
    litecoinFullyDilutedContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    litecoinContainer.appendChild(litecoinFullyDilutedContainer);

    const litecoinFullyDiluted = document.createElement('span');
    litecoinFullyDiluted.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    litecoinFullyDiluted.textContent = 'Fully Diluted Valuation';
    litecoinFullyDilutedContainer.appendChild(litecoinFullyDiluted);

    const litecoinFullyDilutedPrice = document.createElement('span');
    litecoinFullyDilutedPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    litecoinFullyDilutedPrice.textContent = '$' + Number(cryptoData[22].fully_diluted_valuation).toLocaleString('en-US');
    litecoinFullyDilutedContainer.appendChild(litecoinFullyDilutedPrice);

    const litecoinTotalVolumeContainer = document.createElement('div');
    litecoinTotalVolumeContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    litecoinContainer.appendChild(litecoinTotalVolumeContainer);

    const litecoinTotalVolume = document.createElement('span');
    litecoinTotalVolume.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    litecoinTotalVolume.textContent = '24 Hour Trading Vol';
    litecoinTotalVolumeContainer.appendChild(litecoinTotalVolume);

    const litecoinTotalVolumePrice = document.createElement('span');
    litecoinTotalVolumePrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    litecoinTotalVolumePrice.textContent = '$' + Number(cryptoData[22].total_volume).toLocaleString('en-US');
    litecoinTotalVolumeContainer.appendChild(litecoinTotalVolumePrice);

    const litecoinCirculatingSupplyContainer = document.createElement('div');
    litecoinCirculatingSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    litecoinContainer.appendChild(litecoinCirculatingSupplyContainer);

    const litecoinCirculatingSupply = document.createElement('span');
    litecoinCirculatingSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    litecoinCirculatingSupply.textContent = 'Circulating Supply';
    litecoinCirculatingSupplyContainer.appendChild(litecoinCirculatingSupply);

    const litecoinCirculatingSupplyPrice = document.createElement('span');
    litecoinCirculatingSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    litecoinCirculatingSupplyPrice.textContent = Number(cryptoData[22].circulating_supply).toLocaleString('en-US');
    litecoinCirculatingSupplyContainer.appendChild(litecoinCirculatingSupplyPrice);

    const litecoinTotalSupplyContainer = document.createElement('div');
    litecoinTotalSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    litecoinContainer.appendChild(litecoinTotalSupplyContainer);

    const litecoinTotalSupply = document.createElement('span');
    litecoinTotalSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    litecoinTotalSupply.textContent = 'Total Supply';
    litecoinTotalSupplyContainer.appendChild(litecoinTotalSupply);

    const litecoinTotalSupplyPrice = document.createElement('span');
    litecoinTotalSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    litecoinTotalSupplyPrice.textContent = Number(cryptoData[22].total_supply).toLocaleString('en-US');
    litecoinTotalSupplyContainer.appendChild(litecoinTotalSupplyPrice);

    const litecoinMaxSupplyContainer = document.createElement('div');
    litecoinMaxSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    litecoinContainer.appendChild(litecoinMaxSupplyContainer);

    const litecoinMaxSupply = document.createElement('span');
    litecoinMaxSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    litecoinMaxSupply.textContent = 'Max Supply';
    litecoinMaxSupplyContainer.appendChild(litecoinMaxSupply);

    const litecoinMaxSupplyPrice = document.createElement('span');
    litecoinMaxSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    litecoinMaxSupplyPrice.textContent = Number(cryptoData[22].max_supply).toLocaleString('en-US');
    litecoinMaxSupplyContainer.appendChild(litecoinMaxSupplyPrice);
}

document.getElementById('litecoin').addEventListener('click', () => {
    if(cryptoData.length > 0){
        popupContainer.classList.toggle('hidden');
        litecoinPopUp(cryptoData);
    }else{
        alert('Loading.. click again');
    }
});



function stellarPopUp(cryptoData) {
    const stellarContainer = document.createElement('div');
    stellarContainer.classList.add('fixed', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'bg-white', 'p-4', 'border', 'border-gray-400', 'w-1/3', 'flex', 'flex-col', 'gap-3', 'rounded', 'xl:w-1/2', 'md:w-3/4', 'sm:w-full');
    popupContainer.innerHTML = ''; 
    popupContainer.appendChild(stellarContainer);

    const stellarPriceAndLogo = document.createElement('div');
    stellarPriceAndLogo.classList.add('flex', 'gap-2', 'items-center');
    stellarContainer.appendChild(stellarPriceAndLogo);

    const stellarLogo = document.createElement('img');
    stellarLogo.classList.add('w-9');
    stellarLogo.src = cryptoData[34].image;
    stellarLogo.alt = 'Stellar';
    stellarPriceAndLogo.appendChild(stellarLogo);

    const stellarName = document.createElement('span');
    stellarName.classList.add('text-slate-900', 'font-bold', 'text-2xl');
    stellarName.textContent = cryptoData[34].name;
    stellarPriceAndLogo.appendChild(stellarName);

    const stellarSymbol = document.createElement('span');
    stellarSymbol.classList.add('text-slate-400', 'uppercase', 'text-xl');
    stellarSymbol.textContent = cryptoData[34].symbol;
    stellarPriceAndLogo.appendChild(stellarSymbol);

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('text-2xl', 'absolute', 'top-2', 'right-2', 'font-bold', 'rounded-full', 'px-3','pb-2', 'bg-slate-500', 'hover:scale-110', 'transition', 'text-white');
    closeBtn.textContent = 'x';
    closeBtn.addEventListener('click', ()=>{
        popupContainer.classList.toggle('hidden');
    });
    stellarPriceAndLogo.appendChild(closeBtn);

    const stellarPrice = document.createElement('div');
    stellarPrice.classList.add('text-slate-950', 'text-6xl', 'font-bold', 'mb-3');
    stellarPrice.textContent = '$' + Number(cryptoData[34].current_price).toFixed(5).toLocaleString('en-US');
    stellarContainer.appendChild(stellarPrice);

    const stellarMarketCapContainer = document.createElement('div');
    stellarMarketCapContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    stellarContainer.appendChild(stellarMarketCapContainer);

    const stellarMarketCap = document.createElement('span');
    stellarMarketCap.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    stellarMarketCap.textContent = 'Market Cap';
    stellarMarketCapContainer.appendChild(stellarMarketCap);

    const stellarMarketCapPrice = document.createElement('span');
    stellarMarketCapPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    stellarMarketCapPrice.textContent = '$' + Number(cryptoData[34].market_cap).toLocaleString('en-US');
    stellarMarketCapContainer.appendChild(stellarMarketCapPrice);

    const stellarFullyDilutedContainer = document.createElement('div');
    stellarFullyDilutedContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    stellarContainer.appendChild(stellarFullyDilutedContainer);

    const stellarFullyDiluted = document.createElement('span');
    stellarFullyDiluted.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    stellarFullyDiluted.textContent = 'Fully Diluted Valuation';
    stellarFullyDilutedContainer.appendChild(stellarFullyDiluted);

    const stellarFullyDilutedPrice = document.createElement('span');
    stellarFullyDilutedPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    stellarFullyDilutedPrice.textContent = '$' + Number(cryptoData[34].fully_diluted_valuation).toLocaleString('en-US');
    stellarFullyDilutedContainer.appendChild(stellarFullyDilutedPrice);

    const stellarTotalVolumeContainer = document.createElement('div');
    stellarTotalVolumeContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    stellarContainer.appendChild(stellarTotalVolumeContainer);

    const stellarTotalVolume = document.createElement('span');
    stellarTotalVolume.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    stellarTotalVolume.textContent = '24 Hour Trading Vol';
    stellarTotalVolumeContainer.appendChild(stellarTotalVolume);

    const stellarTotalVolumePrice = document.createElement('span');
    stellarTotalVolumePrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    stellarTotalVolumePrice.textContent = '$' + Number(cryptoData[34].total_volume).toLocaleString('en-US');
    stellarTotalVolumeContainer.appendChild(stellarTotalVolumePrice);

    const stellarCirculatingSupplyContainer = document.createElement('div');
    stellarCirculatingSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    stellarContainer.appendChild(stellarCirculatingSupplyContainer);

    const stellarCirculatingSupply = document.createElement('span');
    stellarCirculatingSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    stellarCirculatingSupply.textContent = 'Circulating Supply';
    stellarCirculatingSupplyContainer.appendChild(stellarCirculatingSupply);

    const stellarCirculatingSupplyPrice = document.createElement('span');
    stellarCirculatingSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    stellarCirculatingSupplyPrice.textContent = Number(cryptoData[34].circulating_supply).toLocaleString('en-US');
    stellarCirculatingSupplyContainer.appendChild(stellarCirculatingSupplyPrice);

    const stellarTotalSupplyContainer = document.createElement('div');
    stellarTotalSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    stellarContainer.appendChild(stellarTotalSupplyContainer);

    const stellarTotalSupply = document.createElement('span');
    stellarTotalSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    stellarTotalSupply.textContent = 'Total Supply';
    stellarTotalSupplyContainer.appendChild(stellarTotalSupply);

    const stellarTotalSupplyPrice = document.createElement('span');
    stellarTotalSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    stellarTotalSupplyPrice.textContent = Number(cryptoData[34].total_supply).toLocaleString('en-US');
    stellarTotalSupplyContainer.appendChild(stellarTotalSupplyPrice);

    const stellarMaxSupplyContainer = document.createElement('div');
    stellarMaxSupplyContainer.classList.add('border-b-2', 'border-slate-200', 'flex', 'justify-between');
    stellarContainer.appendChild(stellarMaxSupplyContainer);

    const stellarMaxSupply = document.createElement('span');
    stellarMaxSupply.classList.add('font-semibold', 'text-slate-400', 'text-lg','pb-2');
    stellarMaxSupply.textContent = 'Max Supply';
    stellarMaxSupplyContainer.appendChild(stellarMaxSupply);

    const stellarMaxSupplyPrice = document.createElement('span');
    stellarMaxSupplyPrice.classList.add('text-slate-900', 'text-lg', 'font-semibold');
    stellarMaxSupplyPrice.textContent = Number(cryptoData[34].max_supply).toLocaleString('en-US');
    stellarMaxSupplyContainer.appendChild(stellarMaxSupplyPrice);
}

document.getElementById('stellar').addEventListener('click', () => {
    if(cryptoData.length > 0){
        popupContainer.classList.toggle('hidden');
        stellarPopUp(cryptoData);
    }else{
        alert('Loading.. click again');
    }
});
