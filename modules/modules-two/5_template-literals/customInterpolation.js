// Flexible expression interpolation for arbitrary methods.

get([ "http://example.com/foo?bar=", "&quux=", "" ],bar + baz, quux);



get`http://example.com/foo?bar=${bar + baz}&quux=${quux}`