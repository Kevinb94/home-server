# Prepping macbook pro for server usage.

sudo pmset -a sleep 0
sudo pmset -a disksleep 0
sudo pmset -a displaysleep 0
sudo pmset -a autopoweroff 0

# Turn off automatic reboots on system failure
sudo systemsetup -setrestartfreeze off

# Set system to automatically restart after a power failure
sudo systemsetup -setrestartpowerfailure on

# Reduce Display Brightness and Disable Display Sleep 
sudo pmset -a displaysleep 0

#  Disable Power Nap
sudo pmset -a powernap 0

