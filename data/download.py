from urllib.request import urlretrieve
from pathlib import Path

def download_biketrips(years=range(2016, 2020), months=range(3, 12)):
	dir = Path("data")
	for year in years:
		for month in months:
			name = f"{year}-{month:02}.csv"
			url = f"http://dev.hsl.fi/citybikes/od-trips-{year}/{name}"
			name = "trips-" + name
			target = dir / name
			if target.exists():
				print("Already downloaded", name)
				continue
			try:
				urlretrieve(url, target)
				print("Downloaded", name)
			except:
				print("Could not download", name)

def download_stations():
	try:
		urlretrieve("https://opendata.arcgis.com/datasets/1b492e1a580e4563907a6c7214698720_0.csv", "data/stations-2019.csv")
		print("Downloaded", "stations-2019.csv")
	except:
		print("Could not download", "stations-2019.csv")


if __name__ == "__main__":
	download_biketrips()
	download_stations()