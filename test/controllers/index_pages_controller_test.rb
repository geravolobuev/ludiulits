require 'test_helper'

class IndexPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get index_pages_home_url
    assert_response :success
  end

end
