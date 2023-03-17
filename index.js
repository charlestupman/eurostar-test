const schedule = [
	{
		date: '01012001',
		train: 1,
	},
	{
		date: '01012001',
		train: 2,
	},
	{
		date: '02012001',
		train: 1,
	},
	{
		date: '02012001',
		train: 2,
	}
]

const trains = {
	1: {
		origin: 'London',
		destination: 'Paris',
	},
	2: {
		origin: 'Paris',
		destination: 'London'
	}
}

const generateTimetable = (schedule, trains) => schedule.reduce((acc, instance) => {
		const hadDates = acc.findIndex(({ date }) => date === instance.date);
		if (hadDates === -1) {
			const newTimeTableEntry = ({
				date: instance.date,
				runs: [{ train: instance.train, origin: trains[instance.train].origin, destination: trains[instance.train].destination }]
			})
			return [ ...acc, newTimeTableEntry ]
		}
		acc[hadDates].runs.push({ train: instance.train, origin: trains[instance.train].origin, destination: trains[instance.train].destination });
		return acc
	}, [])

const timetable = generateTimetable(schedule, trains);

timetable.forEach(timeTableInstance => {
	const date = `Schedule \n Date: ${timeTableInstance.date}\n`
	console.log(date)
	timeTableInstance.runs.forEach(runDetails => {
		const run = `Train no.${runDetails.train}, Origin: ${runDetails.origin}, Destination: ${runDetails.destination}`
		console.log(run)
	})
})
