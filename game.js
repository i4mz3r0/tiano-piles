class Game{
    constructor(){
        this.started = false
        let x=[]
		let y=[]
		for(let i=0;i<=Math.floor(Math.random()*10)+5;i++){
			switch(Math.floor((Math.random()*4)+1)){
				case 0:
					y=["up",-10-30*i]
					break
				case 1:
					y=["left",-10-30*i]
					break
				case 2:
					y=["right",-10-30*i]
					break
				case 3:
					y=["down",-10-30*i]
					break
				case 4: 
					y=["tap",-10-30*i]
					break
			}
			x.push(y)
		}
		console.log(x)
		this.notes=x	
	}
}
