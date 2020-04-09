const useRandomSentence = () => {
	const sentences = [
		'the Extreme Enhanced Community Quarantine Lockdown will be lifted',
		'we can go outside',
		'we can go back to the office',
		'we can dine-in at restaurants again',
		'we can RAID SHADOW LEGENDS',
		'we can travel to Kings Row',
		'we can crossing our animals',
		'we can [REDACTED] our [REDACTED]',
		'we can shakes hands and fist bumps',
		'SM can bring back payday sale',
		'people can get to the salon/barber',
		'we can eat whatever/whenver we want',
		'ha? HOTDOG',
		'Netflix to bring back HD mode',
	];
	return sentences[Math.ceil(Math.random() * sentences.length) - 1];
};

export default useRandomSentence;
