SCRIPT_DIR=scripts
BUILD_DIR=build
BUILD_OUT_JS=$(BUILD_DIR)/hanzi-writer.min.js
JS_FILES=$(SCRIPT_DIR)/syllables.js $(SCRIPT_DIR)/pinyin-split.js $(SCRIPT_DIR)/hanzi-loader.js


$(BUILD_OUT_JS): $(JS_FILES)
	@mkdir -p $(BUILD_DIR)
	@> $(BUILD_DIR)/tmp.js
	@for num in $(JS_FILES); do \
		cat $$num >> $(BUILD_DIR)/tmp.js ; \
	done
	@minify $(BUILD_DIR)/tmp.js > $(BUILD_OUT_JS) 


clean:
	@rm -f $(BUILD_DIR)/*
	@rm -f $(BUILD_OUT_JS)
	