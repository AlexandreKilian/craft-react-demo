<?php


namespace craft\contentmigrations;

use craft\db\Migration;
//use craft\db\MigrationManager;
//use craft\helpers\MigrationHelper;

use firstborn\migrationmanager\MigrationManager;

/**
 * Generated migration
 */
class m181220_011415_migration_fields_sections extends Migration
{
    /**
    Migration manifest:
    
    FIELD
        - body
        - summary
        
    SECTION
        - blogposts
        - homepage
            */

private $json = <<<JSON
{"settings":{"dependencies":{"sections":[{"name":"Blogposts","handle":"blogposts","type":"channel","enableVersioning":"1","propagateEntries":"1","sites":{"default":{"site":"default","hasUrls":"1","uriFormat":"{slug}","enabledByDefault":"1","template":"_entry"}},"entrytypes":[{"sectionHandle":"blogposts","hasTitleField":"1","titleLabel":"Title","name":"Blogposts","handle":"blogposts","fieldLayout":{"Content":["body","summary"]},"requiredFields":[]}]},{"name":"Homepage","handle":"homepage","type":"single","enableVersioning":"0","propagateEntries":"1","sites":{"default":{"site":"default","hasUrls":"1","uriFormat":"__home__","enabledByDefault":"1","template":"index"}},"entrytypes":[{"sectionHandle":"homepage","hasTitleField":"0","titleLabel":null,"titleFormat":"{section.name|raw}","name":"Homepage","handle":"homepage","fieldLayout":[],"requiredFields":[]}]}]},"elements":{"fields":[{"group":"Common","name":"Body","handle":"body","instructions":"","translationMethod":"none","translationKeyFormat":null,"required":null,"type":"craft\\\\fields\\\\PlainText","typesettings":{"placeholder":"","code":"","multiline":"1","initialRows":"10","charLimit":"","columnType":"text"}},{"group":"Common","name":"Summary","handle":"summary","instructions":"","translationMethod":"none","translationKeyFormat":null,"required":null,"type":"craft\\\\fields\\\\PlainText","typesettings":{"placeholder":"","code":"","multiline":"1","initialRows":"4","charLimit":"","columnType":"text"}}],"sections":[{"name":"Blogposts","handle":"blogposts","type":"channel","enableVersioning":"1","propagateEntries":"1","sites":{"default":{"site":"default","hasUrls":"1","uriFormat":"{slug}","enabledByDefault":"1","template":"_entry"}},"entrytypes":[{"sectionHandle":"blogposts","hasTitleField":"1","titleLabel":"Title","name":"Blogposts","handle":"blogposts","fieldLayout":{"Content":["body","summary"]},"requiredFields":[]}]},{"name":"Homepage","handle":"homepage","type":"single","enableVersioning":"0","propagateEntries":"1","sites":{"default":{"site":"default","hasUrls":"1","uriFormat":"__home__","enabledByDefault":"1","template":"index"}},"entrytypes":[{"sectionHandle":"homepage","hasTitleField":"0","titleLabel":null,"titleFormat":"{section.name|raw}","name":"Homepage","handle":"homepage","fieldLayout":[],"requiredFields":[]}]}]}}}
JSON;

	/**
	 * Any migration code in here is wrapped inside of a transaction.
	 * Returning false will rollback the migration
	 *
	 * @return bool
	 */
	public function safeUp()
	{
	    return MigrationManager::getInstance()->migrations->import($this->json);    }

    public function safeDown()
    {
        echo "m181220_011415_migration_fields_sections cannot be reverted.\n";
        return false;
    }
}
