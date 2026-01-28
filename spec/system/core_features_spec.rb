# frozen_string_literal: true

RSpec.describe "Core features" do
  before { upload_theme_or_component }

  it_behaves_like "having working core features",
                  skip_examples: %i[likes topics login search:full_page]
end
