document.getElementById('flecheH').addEventListener('click', rotation, false);
document.getElementById('flecheAH').addEventListener('click', rotation, false);

function rotation(e)
{
	arrMenu = ['mAccueil', 'mCompetences', 'mFormation', 'mExperience', 'mContact'];

	var strChoix = document.getElementById('Menu');
	var intIndex = arrMenu.indexOf(strChoix.className);
	var strPageActive = arrMenu[intIndex].substr(1, arrMenu[intIndex].length-1);
	var angle = strChoix.style.transform;
	
	console.log(angle);

	document.getElementById(strPageActive).className = ('pageHid pages');

	if (e.target.id == 'flecheH')
	{
		if (intIndex == 0)
		{
			strChoix.className = arrMenu[4];
		}
		else
		{
			strChoix.className = arrMenu[intIndex-1];
		}
		
		intIndex = arrMenu.indexOf(strChoix.className);
		strPageActive = arrMenu[intIndex].substr(1, arrMenu[intIndex].length-1);
		document.getElementById(strPageActive).className = ('pageAff pages');
	}

	if (e.target.id == 'flecheAH')
	{
		if (intIndex == 4)
		{
			strChoix.className = arrMenu[0];
		}
		else
		{
			strChoix.className = arrMenu[intIndex+1];
		}
	
		var intIndex = arrMenu.indexOf(strChoix.className);
		var strPageActive = arrMenu[intIndex].substr(1, arrMenu[intIndex].length-1);
		document.getElementById(strPageActive).className = ('pageAff pages');
	}
}