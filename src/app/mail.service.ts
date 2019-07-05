export class MailService {
    showEmailList = true;
    allBoxes = ["Inbox","Sent Items", "Drafts", "Trash Box"];
	email ={};
	whichBox = "inbox";
    dataObj = {inbox:[{
		"from": "Theodore Massey",
		"email": "sit.amet.dapibus@duiFuscediam.net",
		"subject": "velit justo nec ante. Maecenas mi",
		"body": "Sed pharetra, felis eget varius",
		"to": "me",
		"isRead": false
	},
	{
		"from": "Nigel Franks",
		"email": "lacus.vestibulum@eleifendnunc.org",
		"subject": "elit, dictum eu, eleifend nec,",
		"body": "Donec feugiat metus sit amet ante. Vivamus non lorem vitae",
		"to": "me",
		"isRead": false
	},
	{
		"from": "Macaulay Mccormick",
		"email": "ipsum.primis.in@Maecenasiaculis.com",
		"subject": "cursus purus. Nullam scelerisque neque sed",
		"body": "euismod in, dolor. Fusce feugiat. Lorem",
		"to": "me",
		"isRead": true
	},
	{
		"from": "Kelsie Fry",
		"email": "fermentum@ipsum.org",
		"subject": "Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in",
		"body": "neque non quam. Pellentesque habitant morbi tristique senectus et",
		"to": "me",
		"isRead": false
	},
	{
		"from": "Garth Gillespie",
		"email": "condimentum@Nam.org",
		"subject": "felis ullamcorper viverra. Maecenas iaculis",
		"body": "mauris. Suspendisse aliquet molestie tellus.",
		"to": "me",
		"isRead": true
	},
	{
		"from": "Kellie Hess",
		"email": "Nunc@suscipitest.co.uk",
		"subject": "erat. Vivamus nisi.",
		"body": "et ipsum cursus vestibulum. Mauris magna. Duis dignissim",
		"to": "me",
		"isRead": true
	},
	{
		"from": "Denise Salinas",
		"email": "dolor@orcilacus.co.uk",
		"subject": "turpis egestas. Fusce aliquet magna a neque.",
		"body": "Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque",
		"to": "me",
		"isRead": true
	},
	{
		"from": "Hasad Fitzgerald",
		"email": "vel.turpis.Aliquam@Innec.co.uk",
		"subject": "netus",
		"body": "tempor erat neque non quam. Pellentesque",
		"to": "me",
		"isRead": true
	},
	{
		"from": "Colin Craft",
		"email": "ut.quam.vel@tellussem.ca",
		"subject": "egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae,",
		"body": "ligula eu enim. Etiam imperdiet dictum magna. Ut",
		"to": "me",
		"isRead": true
	},
	{
		"from": "Vivien Koch",
		"email": "rutrum@nullaatsem.net",
		"subject": "euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget",
		"body": "aliquam iaculis, lacus pede sagittis augue, eu tempor",
		"to": "me",
		"isRead": true
	},
	{
		"from": "Ahmed Gilbert",
		"email": "rutrum.eu.ultrices@consequatnecmollis.net",
		"subject": "mi felis, adipiscing fringilla,",
		"body": "eget, dictum placerat, augue. Sed molestie. Sed id risus quis",
		"to": "me",
		"isRead": true
	},
	{
		"from": "Unity Ayala",
		"email": "tellus.eu.augue@elitpede.org",
		"subject": "malesuada fames ac turpis egestas. Fusce aliquet",
		"body": "Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat",
		"to": "me",
		"isRead": true
	},
	{
		"from": "Dara Owen",
		"email": "molestie.dapibus@eu.com",
		"subject": "risus.",
		"body": "aliquet, metus urna convallis erat, eget",
		"to": "me",
		"isRead": true
	}],
	'sent items':[[
		{
			"from": "Barrett Woodward",
			"to": "me",
			"emailId": "sed.pede.Cum@tempusscelerisque.ca",
			"subject": "VON64XNH3DY",
			"body": "Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat",
			"isRead": true
		},
		{
			"from": "me",
			"to": "Barrett Woodward",
			"emailId": "me95@gmail.com",
			"subject": "Test subject",
			"body": "Nam con dolor vitae dolor. Donecc feugiat",
			"isRead": true
		},
		{
			"from": "Barrett Woodward",
			"to": "me",
			"emailId": "sed.pede.Cum@tempusscelerisque.ca",
			"subject": "Test subject23",
			"body": "Nam con dolor vitae dolor. Donecc feugiat dummy body",
			"isRead": true
		}
	]]
    }

    showData(type){
        type = type.toLowerCase();
		this.showEmailList = true;
		this.whichBox = type;
        return this.dataObj[type];
      }
      showEmail(email){
        this.showEmailList = false;
          this.email = email;
      }
}