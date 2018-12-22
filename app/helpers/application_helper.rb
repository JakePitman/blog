module ApplicationHelper
  def character_limit(string, maximum_characters)
    string.length > maximum_characters ? string[0..maximum_characters] + '...' : string
  end
end
