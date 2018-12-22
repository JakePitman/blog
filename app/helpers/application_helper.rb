module ApplicationHelper
  def character_limit(string, maximum_characters)
    string.split(' ').each do |word|
      return string[0..maximum_characters / 2.5] + '...' if word.length > (maximum_characters / 2)
    end
    string.length > maximum_characters ? string[0..maximum_characters] + '...' : string
  end
end
