SCRIPT_DIR=scripts
BUILD_DIR=build
BUILD_OUT_JS=$(BUILD_DIR)/hanzi-writer-cards.min.js $(BUILD_DIR)/typing-answer.min.js $(BUILD_DIR)/typekit.min.js
# order of elements is important. From left to right is from first to last file joined
JS_FILES_HANZI=$(SCRIPT_DIR)/pinyin-split.js $(SCRIPT_DIR)/hanzi-loader.js $(SCRIPT_DIR)/hanzi-starter.js 
JS_FILES_TYPING=$(SCRIPT_DIR)/typing-answer.js
JS_FILES_TYPEKIT=$(SCRIPT_DIR)/typekit.js

define generate_js 
	@mkdir -p $(BUILD_DIR)
	@> $(BUILD_DIR)/tmp.js
	@for num in $2; do \
		cat $$num >> $(BUILD_DIR)/tmp.js ; \
	done
	@minify $(BUILD_DIR)/tmp.js > $1 
endef

all: $(BUILD_OUT_JS)

$(BUILD_DIR)/hanzi-writer-cards.min.js: $(JS_FILES_HANZI)
	@echo Building $@
	$(call generate_js,$@,$^)

$(BUILD_DIR)/typing-answer.min.js: $(JS_FILES_TYPING) 
	@echo Building $@
	$(call generate_js,$@,$^)

$(BUILD_DIR)/typekit.min.js: $(JS_FILES_TYPEKIT) 
	@echo Building $@
	$(call generate_js,$@,$^)

clean:
	@rm -f $(BUILD_DIR)/*
	@rm -f $(BUILD_OUT_JS)
	
