let colors = ['red', 'orange', 'yellow', 'green']

colors.length //4

colors[0] //red
colors[1] //orange
colors[2] //yellow
colors[3] //green

colors[3] = 'blue' // replace index 3 with blue
colors[3] //blue

colors[4] = 'purple' // add index 4 with value of purple
colors[4] //purple

colors[colors.length] = 'brown' // add brown to the end of the array.  With this method you don't need to know the number of items currently in the array