const input = document.body.innerText.trim().split('\n');

const partOne = input.map(line => line.split(' '))
                     .map(a => ({[a[0]]: Number.parseInt(a[1])}))
                     .map(o => ({f: o.forward || 0, aim: o.down || -o.up || 0 }))
                     .reduce((sum, current) => ([sum[0]+current.f, sum[1] + current.aim]), [0,0])
                     .reduce((a,b) => a*b);

const partTwo = input.map(line => line.split(' '))
                     .map(a => ({[a[0]]: Number.parseInt(a[1])}))
                     .map(o => ({f: o.forward || 0, aim: o.down || -o.up || 0 }))
                     .reduce((final, current) => ({f: final.f + current.f, aim: final.aim + current.aim, depth: final.depth + current.f*final.aim, answer: (final.f+current.f)*(final.depth + current.f*final.aim)}),{f: 0, aim: 0, depth: 0})
                     .answer;