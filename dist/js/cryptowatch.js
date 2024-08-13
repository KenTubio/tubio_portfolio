// wto yung mag fetch ng api 
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

