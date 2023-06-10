const MakerCoin = require('./index');

const makerCoinCrypto = new MakerCoin.crypto();
const makerCoinApi = new MakerCoin.api('http://212.147.106.225:3001');


(async () => {

	/* MakerCoin Crypto Methods */

	/* generateNewAddress */

	console.log("Testing: generateNewAddress()");

	let newAddress;

	try {

		newAddress = makerCoinCrypto.generateNewAddress();

		console.log(newAddress);

	} catch (e) {

		console.log('Error');
		console.log(e);

	}

	/* generateAddressFromMnemonic */

	console.log("Testing: generateAddressFromMnemonic()");

	try {

		let restoreAddress = makerCoinCrypto.generateAddressFromMnemonic(newAddress.mnemonic);

		console.log(restoreAddress);

	} catch (e) {

		console.log('Error');
		console.log(e);

	}

	/* validateAddress */

	console.log("Testing: validateAddress()");

	try {

		let validateAddress = makerCoinCrypto.validateAddress(newAddress.address);

		console.log(validateAddress);

	} catch (e) {

		console.log('Error');
		console.log(e);

	}

	/* createSignedTransaction */

	console.log("Testing: createSignedTransaction()");

	try {

		let createSignedTransaction = makerCoinCrypto.createSignedTransaction(newAddress.address, 1, newAddress.publicKey, newAddress.privateKey);

		console.log(createSignedTransaction);

	} catch (e) {

		console.log('Error');
		console.log(e);

	}

	/* signMessage */

	console.log("Testing: signMessage()");

	let signMessage;

	try {

		signMessage = makerCoinCrypto.signMessage('test', newAddress.publicKey, newAddress.privateKey);

		console.log(signMessage);

	} catch (e) {

		console.log('Error');
		console.log(e);

	}

	/* verifyMessage */

	console.log("Testing: verifyMessage()");

	try {

		let verifyMessage = makerCoinCrypto.verifyMessage('test', newAddress.publicKey, signMessage);

		console.log(verifyMessage);

	} catch (e) {

		console.log('Error');
		console.log(e);

	}

	/* walletAddressFromPublicKey */

	console.log("Testing: walletAddressFromPublicKey()");

	try {

		let walletAddressFromPublicKey = makerCoinCrypto.walletAddressFromPublicKey(newAddress.publicKey);

		console.log(walletAddressFromPublicKey);

	} catch (e) {

		console.log('Error');
		console.log(e);

	}




/* makerCoin API Methods */

	/* getNetworkInfo */

	console.log("Testing: getNetworkInfo()");

	let getNetworkInfo;
	
	try {
	
		getNetworkInfo = await makerCoinApi.getNetworkInfo();

		console.log(getNetworkInfo);

	} catch (e) {

		console.log('Error');
		console.log(e);

	}

	/* getBlock */

	console.log("Testing: getBlock()");

	try {
	
		let getBlock = await makerCoinApi.getBlock(getNetworkInfo.blockheight);

		console.log(getBlock);

	} catch (e) {

		console.log('Error');
		console.log(e);

	}

	/* getTransaction */

	console.log("Testing: getTransaction()");

	try {
	
		let getTransaction = await makerCoinApi.getTransaction('616635cb13db0bd0e98e39af2f490ce7d33833f268ec3a0908a9f72267328a42')

		console.log(getTransaction);

	} catch (e) {

		console.log('Error');
		console.log(e);

	}

	/* getBalance */

	console.log("Testing: getBalance()");

	try {
	
		let getBalance = await makerCoinApi.getBalance(newAddress.address);

		console.log(getBalance);

	} catch (e) {

		console.log('Error');
		console.log(e);

	}

	/* getFeeEstimate */

	console.log("Testing: getFeeEstimate()");

	try {
	
		let getFeeEstimate = await makerCoinApi.getFeeEstimate();

		console.log(getFeeEstimate);
	
	} catch (e) {

		console.log('Error');
		console.log(e);

	}

	/* getTransactionsForAddress */

	console.log("Testing: getTransactionsForAddress()");

	try {
	
		let getTransactionsForAddress = await makerCoinApi.getTransactionsForAddress('006185E4F134C265DEFBF4DA270E6D504A8ACC45C5DA5F7528');

		console.log(getTransactionsForAddress);

	} catch (e) {

		console.log('Error');
		console.log(e);

	}
	
	/* getRecentTransactions */

	console.log("Testing: getRecentTransactions()");

	try {
	
		let getRecentTransactions = await makerCoinApi.getRecentTransactions();

		console.log(getRecentTransactions);
	
	} catch (e) {

		console.log('Error');
		console.log(e);

	}

})();
