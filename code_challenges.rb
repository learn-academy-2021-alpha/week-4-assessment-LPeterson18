# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.

fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

# pseudocode
# create a method that takes an array as an argument
# use .select and modulo to return only odd numbers
# use .sort to sort array from least to greatest

def create_odd_num_sorted_array array
  sorted_array = array.select do |value|
   value.is_a?(Numeric) && value % 2 != 0
  end
  return sorted_array.sort
end

p create_odd_num_sorted_array fullArr1
p create_odd_num_sorted_array fullArr2

# --------------------2) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_a = 'a'
# Expected output: ['tea', 'soda water']

#pseudocode
#create a method that takes array of strings and a string as arguments
#.select to create sort through array and return new array
#.include to check if strings contain letter and return the ones that do

def find_word_with_letter array, letter
  array.select do |value|
    value.include?(letter)
  end
end

p find_word_with_letter beverages_array, letter_o
p find_word_with_letter beverages_array, letter_a

# -------------------3) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

#pseudocode
#create method that takes in string as method
#use delete to remove vowels
#return string without vowels

def remove_vowels string
  return string.delete("AaEeIiOoUu")
end

p remove_vowels album1
p remove_vowels album2
p remove_vowels album3


# --------------------4) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
  def initialize model
    @model = model
    @wheels = 2
    @current_speed = 0
  end

  def get_info
    "The #{@model} has #{@wheels} wheels and is going #{@current_speed} mph."
  end

  def pedal_faster number
    @current_speed = @current_speed + number
  end

  def brake number
    if(number > @current_speed)
      @current_speed = 0
    else
      @current_speed = @current_speed - number
    end
  end

end

my_bike = Bike.new("Trek")
p my_bike.get_info


# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0

p my_bike.pedal_faster 10
p my_bike.brake 15


#
