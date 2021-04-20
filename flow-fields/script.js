function setup() {
  createCanvas(1000,1000);

  background(255);
  
  var left_x = floor(width*-0.5);
  var right_x = floor(width*1.5);
  var top_y = floor(height*-0.5);
  var bottom_y = floor(height*1.5);
  
  var resolution = floor(width*0.02);
  
  var num_columns = (right_x - left_x) / resolution;
  var num_rows = (bottom_y - top_y) / resolution;
  var num_lines = width*height/resolution;
  
  var grid = Array(num_columns).fill(Array(num_rows));
  
  var default_angle = PI * 0.25;
  
  function curve(x,y) {
    noFill();
    beginShape();
  
    var num_steps = 20;
    var step_length = width * 0.05;
  
    for (var n = 0; n < num_steps; n++){
      try{
      curveVertex(x,y);
    
      var x_offset = x - left_x;
      var y_offset = y - top_y;
    
      let column_index = floor(x_offset / resolution);
      let row_index = floor(y_offset / resolution);
    
      console.log(grid[column_index]);      
      
      var grid_angle = grid[column_index][row_index];
    
      var x_step = step_length * cos(grid_angle);
      var y_step = step_length * sin(grid_angle);
    
      x = x + x_step;
      y = y + y_step;
      }catch(e){}
    }
  
    endShape();
  }
  
  for (var column = 0; column < num_columns; column++) {
    for (var row = 0; row < num_rows; row++) {
      
      var angle = noise(column * 0.01, row * 0.01) * TWO_PI;
      
      grid[column][row] = angle;
      
      let x = column * resolution;
      let y = row * resolution;
      let length = 15;
      
      //point(x,y);
      //line(x, y, x+cos(grid[column][row])*length, y-sin(grid[column][row])*length);
    }
  }
  
  for(let n = 0; n < 10000; n++) {
   curve(random(0+left_x,width+right_x),random(0+top_y,height+bottom_y));
  }
}


function draw() {

}
